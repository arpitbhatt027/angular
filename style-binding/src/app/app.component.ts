import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'style-binding';
  color = "orange";
  err = true;

  changeColor() {
    this.color = "purple";
  }
}
