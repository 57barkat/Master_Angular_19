import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  count: number = 0;

  handleClick(val: string) {
    if (val === 'plus') {
      this.count++;
    } else if (val === 'minus') {
      this.count--;
    } else if (val === 'reset') {
      this.count = 0;
    }
  }
}
