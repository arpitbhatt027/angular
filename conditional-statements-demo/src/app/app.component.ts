import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'conditional-statements-demo';
  coding = 'java';
  colorName = 'green';
  studentList = ['arpit', 'amit', 'alena', 'tom', 'rahul'];
  employees = [
    {
      name: "Arpit",
      age: 26,
      email: "arpit@gmail.com"
    },
    {
      name: "Peter",
      age: 28,
      email: "peter@yahoo.com"
    },
    {
      name: "Tom",
      age: 42,
      email: "tom@gmail.com"
    },
    {
      name: "Robin",
      age: 34,
      email: "robin@outlook.com"
    },

  ];
}
