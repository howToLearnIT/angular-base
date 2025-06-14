import {Component, LOCALE_ID} from '@angular/core';
import {DecimalPipe, DatePipe, CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-root',
  template: `
    <ul>
      <li>Число c двумя знаками после запятой {{ num | number: '3.2-2' }}</li>
      <li>День рождения {{ birthday | date: 'full' : '+5' }}</li>
      <li>Валюта {{ cost | currency: 'EUR' }}</li>
    </ul>
  `,
  imports: [DecimalPipe, DatePipe, CurrencyPipe],
  providers: [{ provide: LOCALE_ID, useValue: 'ru-RU' }],
})
export class App {
  num = 10000.1234;
  birthday = new Date(2023, 3, 2);
  cost = 4560.34;
}
