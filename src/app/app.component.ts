import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  changeBackgroundColor() {
    // Accessing the body element and changing its background color
    document.body.style.backgroundColor = 'red';
  }
  title = 'random-quote';
}
