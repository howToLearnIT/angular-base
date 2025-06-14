import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    Реверсивное слово: {{ word }}
  `,
  imports: [],
})
export class App {
  word = 'Мы почти у финиша!';
}
