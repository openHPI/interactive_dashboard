import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
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
  
  // ===== FILTER COMPONENT =====
  
  public togglePlatformState(platform: Platform): void {
	if (platform.isFilterSelected && this.getSelectedPlatforms().length == 1) {
		this.getUnselectedPlatforms().forEach(platform => platform.isFilterSelected = true);
	} else {
		platform.isFilterSelected = !platform.isFilterSelected;
	}
	this.update();
  }
  
  // ===== REVIEW COMPONENT =====
  public getReviews(): Review[] {
	let reviews: Review[] = [];
	this.getSelectedPlatforms().forEach(platform => reviews = reviews.concat(platform.reviews));
	return reviews;
  }
  
  
  // ===== DEPRECATED =====
  
  //load data
  getAll(url: string): Observable<Object[]> {
    return this.http.get(url)
      .map(this.extractData);
  }

  private extractData(response: Response) {
    let json = response.json();

   	if(json) {
   		if(json.data) return json.data
   		else return json
	}
	else return {}
  }
  
 
  
  
  
}