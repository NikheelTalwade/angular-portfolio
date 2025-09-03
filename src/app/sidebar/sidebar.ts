import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {
  constructor(private router: Router) { }
  ngOnInit() { }

  navigateToHome() {
    this.router.navigate(['home']);
  }

  navigateToAbout() {
    this.router.navigate(['about']);
  }

  navigateToEducation() {
    this.router.navigate(['education']);
  }

  navigateToContact() {
    this.router.navigate(['contact']);
  }

  navigateToExperience() {
    this.router.navigate(['experience']);
  }

  navigateToProjects() {
    this.router.navigate(['projects']);
  }

  navigateToWeather() {
    this.router.navigate(['weather']);
  }
}
