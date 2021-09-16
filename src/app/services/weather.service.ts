import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const api = '/api';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  


  constructor(private http: HttpClient) { }

  getWeather(city: string) {
    console.log("getting weather")
    return this.http.get(`http://localhost:8000/api/weather/${city}`)
  }

 
}
