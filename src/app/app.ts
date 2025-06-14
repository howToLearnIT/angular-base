import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ul>
      <li>Число c двумя знаками после запятой {{ num }}</li>
      <li>День рождения {{ birthday }}</li>
      <li>Валюта {{ cost }}</li>
    </ul>
  `,
  imports: [],
})
export class App {
  num = 103.1234;
  birthday = new Date(2023, 3, 2);
  cost = 4560.34;
}
