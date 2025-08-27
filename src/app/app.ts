import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./Header/header/header";
import { Footer } from "./Footer/footer/footer";
import { Sidebar } from "./sidebar/sidebar";
import { Home } from "./components/home/home";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, Header, Footer, Sidebar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Nikheel-Talwade');

  constructor() {

  }

  ngOnInit() {
  }


}
