import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  dataType: string = 'barkat';
  num: number = 0;
  changeName() {
    this.dataType = 'barkat Ullah khan khattak';
    this.sum(5, 10);
  }
  sum(a: number, b: number) {
    return (this.num = a + b);
  }
}
