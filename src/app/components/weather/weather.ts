import { Component } from '@angular/core';
import { ApiService } from '../../services/api-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.html',
  styleUrls: ['./weather.scss'],
  imports: [CommonModule, FormsModule]
})
export class WeatherComponent {
  city: string = '';
  weatherData: any = null;
  errorMessage: string = '';
  loading = false;

  constructor(private weatherService: ApiService) { }

  searchWeather() {
    if (!this.city) {
      this.errorMessage = 'Please enter a city name';
      return;
    }
    this.loading = true;
    this.errorMessage = '';
    this.weatherData = null;

    this.weatherService.getWeather(this.city).subscribe({
      next: data => {
        this.weatherData = data;
        this.loading = false;
      },
      error: error => {
        this.errorMessage = error.message;
        this.loading = false;
      }
    });
  }
}
