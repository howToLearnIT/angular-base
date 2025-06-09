import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    Добро пожаловать в {{ city }}.

    2 + 2 = {{ 2 + 2 }} 
  
    {{ decision }}

    {{ sayHello() }}
  `,
  styleUrl: 'app.css'
})
export class App {
  city = 'Лондон';
  isActive = false;

  get decision() {
    return this.isActive ? 'Да' : 'Нет';
  }

  sayHello() {
    return 'Привет';
  }
}
