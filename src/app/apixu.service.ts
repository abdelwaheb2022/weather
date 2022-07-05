import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) {}

  getWeather(location: string){
      return this.http.get(
          'http://api.weatherstack.com/current?access_key=eb617d4758404b12e331bc08f12a8c16&query=' + location
      );
  }
  
}


