import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { Education } from './components/education/education';
import { Experience } from './components/experience/experience';
import { PROJECTS } from './components/projects/projects';
import { WeatherComponent } from './components/weather/weather';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: 'education', component: Education },
  { path: 'experience', component: Experience },
  { path: 'projects', component: PROJECTS },
  { path: 'weather', component: WeatherComponent }
];
