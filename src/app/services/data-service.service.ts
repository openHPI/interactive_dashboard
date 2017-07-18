import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Course, GlobalStatistics } from '../api';
import { Config, Platform, Review } from '../dashboard';
import 'rxjs/add/operator/map';

//import constants
import { CONFIG } from 'assets/config/config';

interface UpdateListener {
  update(): void;
}
interface AnimationListener {
  startAnimation(): void;
  stopAnimation();
}

@Injectable()
export class DataService {
  
  config: Config = CONFIG;
  
  updateListener: UpdateListener[] = [];
  animationListener: AnimationListener[] = [];
  
  
  constructor(private http: Http) {}
  
  //"Listener" - Functions
  addUpdateListener(listener: UpdateListener): void {
	this.updateListener.push(listener);
	listener.update();
  }
  addAnimationListener(listener: AnimationListener): void {
	this.animationListener.push(listener);
  }
  
  //General
  public getPlatforms(): Platform[] {
	return this.config.platforms;
  }
  
  public update(){
    this.updateListener.forEach(listener => listener.update());
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
	this.getSelectedPlatforms().forEach(platform => reviews = reviews.concat(platform.reviews));
	return reviews;
  }
  
  // ===== COURSE COMPONENT =====
  public getCourses(): Observable<Course[][]> {
    let observables: Observable<Course[]>[] = []
	this.getSelectedPlatforms().
		forEach(platform => observables.push(this.getJsonObservable(platform.rootUrl + this.config.courseSubUrl) as Observable<Course[]>));
	return Observable.forkJoin(observables);							
  }
  
  // ===== WORLD MAP COMPONENT =====
  public getWorldPositions(startDate: Date, endDate: Date): Observable<Object[][]> {
    let observables: Observable<Object[]>[] = [];
	let subUrl = this.config.geoSubUrl + '?' + this.config.geoStartParam + '=' + startDate.toISOString() + '&' + this.config.geoEndParam + '=' + endDate.toISOString();
	observables.push(Observable.of(this.getSelectedPlatforms()));
	this.getSelectedPlatforms().
		forEach(platform => observables.push(this.getJson(platform.rootUrl + subUrl) as Observable<Object[]>));
	return Observable.forkJoin(observables);		
  }
  
  // ===== PROMO NUMBER COMPONENT =====
  public getGlobalNumbers(): Observable<GlobalStatistics[]> {
	let observables: Observable<GlobalStatistics>[] = [];
	this.getSelectedPlatforms()
		.forEach(platform => observables.push(this.getJson(platform.rootUrl + this.config.globalsSubUrl) as Observable<GlobalStatistics>));
	return Observable.forkJoin(observables);
  }
  
 
  
  
  
}