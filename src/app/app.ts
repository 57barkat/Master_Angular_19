import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  name = '';
  displayName = '';
  email = '';

  getName(event: Event) {
    this.name = (event.target as HTMLInputElement).value;
  }

  displayUsername() {
    this.displayName = this.name;
  }
  getEmail(val: string) {
    this.email = val;
  }
}
