import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiKey = '5fbfc659dfce1a121aa593060565cc7c';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private httpClient: HttpClient) {

  }

  getWeather(city: string): Observable<any> {
    const url = `${this.apiUrl}?q=${city}&appid=${this.apiKey}&units=metric`;
    return this.httpClient.get(url).pipe(
      catchError(error => {
        return throwError(() => new Error('Failed to fetch weather data'));
      })
    );
  }
}
