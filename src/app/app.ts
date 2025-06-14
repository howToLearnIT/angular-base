import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    Реверсивный текст: {{ text }}
  `,
  imports: [],
})
export class App {
  text = 'Мы почти у финиша!';
}
