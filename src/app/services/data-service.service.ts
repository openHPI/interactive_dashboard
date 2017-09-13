import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, Subscription } from 'rxjs/Rx';
import { ActiveUser, Course, GlobalStatistics } from '../api';
import { Config, FeatureCard, Platform, Review } from '../dashboard';
import 'rxjs/add/operator/map';

//import constants
import { CONFIG } from 'assets/config/config';
import { FEATURE_CARDS } from 'assets/config/config';

interface UpdateListener {
  update(): void;
}
interface AnimationListener {
  nextAnimationStep(): void;
}
interface ResetListener {
  reset(): void;
}

@Injectable()
export class DataService {

  private config: Config = CONFIG;

  private updateListener: UpdateListener[] = [];
  private animationListener: AnimationListener[] = [];
  private resetListener: ResetListener[] = [];
  private updatingUnits: number = 0;
  private subscription: Subscription;
  private timer: any = Observable.timer(60000, 10000);

  constructor(private http: Http) {}

  //"Listener" - Functions
  addUpdateListener(listener: UpdateListener): void {
  this.updateListener.push(listener);
  this.updatingUnits++;
  listener.update();
  }
  addAnimationListener(listener: AnimationListener): void {
  this.animationListener.push(listener);
  }
  addResetListener(listener: ResetListener): void {
  this.resetListener.push(listener);
  }
  
  //General
  public getPlatforms(): Platform[] {
  return this.config.platforms;
  }
  
  private update(): void {
    this.updatingUnits += this.updateListener.length;
    this.updateListener.forEach(listener => listener.update());
  }
  
  public reset(): void {
  this.resetListener.forEach(listener => listener.reset());
  }
  
  public updateCompleted(): void {
  this.updatingUnits = Math.max(this.updatingUnits - 1, 0);
  }
  
  public recognizedUserInteraction(): void {
  if (this.subscription) {
    this.subscription.unsubscribe();
  }
  this.subscription = this.timer.subscribe(() => this.doNextAnimationStep());
  }
  
  public isUpdating(): boolean {
  return this.updatingUnits > 0;
  }
  
  public areAllPlatformsSelected(): boolean {
  return this.getUnselectedPlatforms().length === 0;
  }
  
  public doNextAnimationStep(): void {
  this.animationListener.forEach(listener => listener.nextAnimationStep());
  }
  
  //Private functions
  private getSelectedPlatforms(): Platform[] {
    return this.config.platforms.filter(platform => platform.isFilterSelected);
  }
  
  private getUnselectedPlatforms(): Platform[] {
  return this.config.platforms.filter(platform => !platform.isFilterSelected);
  }

  private getJsonObservable(url: string): Observable<Object[]> {
    return this.http.get(url).map(this.extractJsonData);
  }

  private getJson(url: string): Observable<Object>{
    return this.http.get(url).map(this.extractJson);
  }

  private extractJsonData(response: Response) {
    let json = response.json();
    return (json) ? json.data : {};
  }

  private extractJson(response: Response) {
    let json = response.json();
    return (json) ? json : {};
  }

  // ===== FILTER COMPONENT =====

  public togglePlatformState(platform: Platform): void {
  if (platform.isFilterSelected) {
    if (this.getSelectedPlatforms().length == 1) { //last one gets disabled => enable all
      this.getUnselectedPlatforms().forEach(p => p.isFilterSelected = true);
    } else { //currently all are selected -> show only given platform
      this.getSelectedPlatforms().forEach(p => {
        if (p != platform) {
          p.isFilterSelected = false;
        }
      });
    }
  } else { //switch to this platform
    this.getSelectedPlatforms().forEach(p => p.isFilterSelected = false);
    platform.isFilterSelected = true;
  }
  this.update();
  }
  
  // ===== REVIEW COMPONENT =====
  public getReviews(): Review[] {
  let reviews: Review[] = [];
  this.getSelectedPlatforms().forEach(function concatAndAddPlatform(platform) {
    let reviewsWithPlatform = [];
    const platformName = platform.displayName;
    for (let review of platform.reviews) {
      review['platform'] = platformName;
      reviewsWithPlatform.push(review);
    }
    reviews = reviews.concat(reviewsWithPlatform);
  });
  return reviews;
  }

  // ===== COURSE COMPONENT =====
  public getCourses(): Observable<any[][]> {
    let observables: Observable<any[]>[] = [];
    observables.push(Observable.of(this.getSelectedPlatforms()));
    this.getSelectedPlatforms().
      forEach(platform => observables.push(this.getJsonObservable(platform.rootUrl + this.config.courseSubUrl) as Observable<any[]>));
    return Observable.forkJoin(observables);
  }

  // ===== WORLD MAP COMPONENT =====
  public getWorldPositions(startDate: Date, endDate: Date): Observable<any[][]> {
    let observables: Observable<any[]>[] = [];
    let subUrl = this.config.geoSubUrl + '?' + this.config.geoStartParam + '=' + startDate.toISOString() + '&' + this.config.geoEndParam + '=' + endDate.toISOString();
    observables.push(Observable.of(this.getSelectedPlatforms()));
    this.getSelectedPlatforms().
      forEach(platform => observables.push(this.getJson(platform.rootUrl + subUrl) as Observable<any[]>));
    return Observable.forkJoin(observables);
  }

  // ===== PROMO NUMBER COMPONENT =====
  public getGlobalNumbers(): Observable<GlobalStatistics[]> {
  let observables: Observable<GlobalStatistics>[] = [];
  this.getSelectedPlatforms()
    .forEach(platform => observables.push(this.getJson(platform.rootUrl + this.config.globalsSubUrl) as Observable<GlobalStatistics>));
  return Observable.forkJoin(observables);
  }

  public getActiveUsers(): Observable<ActiveUser[]> {
    let observables: Observable<ActiveUser>[] = [];
    let startTime = new Date();
    startTime.setMinutes(startTime.getMinutes() - 30);
    let endTime = new Date();
    let subUrl = '?' + this.config.activeStartParam + '=' + startTime.toISOString() + '&' + this.config.activeEndParam + '=' + endTime.toISOString();
    this.getSelectedPlatforms()
      .forEach(platform => observables.push(this.getJson(platform.rootUrl + this.config.activeUserSubUrl + subUrl) as Observable<ActiveUser>));
    return Observable.forkJoin(observables);
  }

  // ===== FEATURE CARD COMPONENT =====
  public getFeatureCards(): FeatureCard[] {
  return FEATURE_CARDS;
  }

  // ===== CITATION COMPONENT =====
  public getCitation(): string {
  if (this.areAllPlatformsSelected()){
    return this.config.citationAll;
  }
  return this.getSelectedPlatforms()[0].citation;
  }

  // ===== PRIMARY COLOR =====
  public getPrimaryColor(): string {
    if (this.getSelectedPlatforms().length === 1) {
      return this.getSelectedPlatforms()[0].primaryColor;
    } else {return this.getPlatforms().filter(platform => platform.rootUrl === 'https://open.hpi.de')[0].primaryColor; }
  }

}
