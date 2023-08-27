import { DataserviceService } from './../dataservice.service';
import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-forcast',
  templateUrl: './forcast.component.html',
  styleUrls: ['./forcast.component.css']
})
export class ForcastComponent {
    weatherDetails: any;
    cityName: any;
    CountryName: any;
    Temp: any;
    TempMin: any;
    TempMax: any;
    Pressure: any;
    humidity: any;
    speed: any;
    city_Name: any;

    constructor(private DataserviceService: DataserviceService) { }


  weatherData() {
    console.log(this.city_Name, "data");
    this.DataserviceService.getWeatherData(this.city_Name).subscribe((respara: any) => {
      this.weatherDetails = respara
      console.log(this.weatherDetails, 'weatherDetails');

      this.cityName = this.weatherDetails.name;
      this.CountryName = this.weatherDetails.sys.country
      this.Temp = this.weatherDetails.main.temp
      this.TempMax = this.weatherDetails.main.temp_max
      this.TempMin = this.weatherDetails.main.temp_min
      this.Pressure = this.weatherDetails.main.pressure
      this.humidity = this.weatherDetails.main.humidity
      this.speed = this.weatherDetails.wind.speed



    })



  }
}



