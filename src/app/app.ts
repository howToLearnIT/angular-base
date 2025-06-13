import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p>Юзер: {{ username }}</p>
    <p>{{ username }} знает фреймворк: {{ favoriteFramework }}</p>
    <label for="framework">Любимый фреймворк:</label>
  `,
  imports: [],
})
export class App {
  username = 'Иван';
  favoriteFramework = '';
}
