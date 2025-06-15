import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'angular-tut';
  message = 'Hover over, click or input to see events in action';
  inputText = '';

  onClickEvent() {
    this.message = '✅ Button clicked';
  }

  onMouseEnterEvent() {
    this.message = '🔥 Mouse entered the box';
  }

  onMouseLeaveEvent() {
    this.message = '🚀 Mouse left the box';
  }

  onInputEvent(event: Event) {
    this.inputText = (event.target as HTMLInputElement).value;
    this.message = `⌨ Typing: ${this.inputText}`;
  }
}
