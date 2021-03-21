import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  title = 'textbox-demo';
  myName = '';
  getValue(val: string) {
    console.log(val);
    this.myName = val;
  }
}
