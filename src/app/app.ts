import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <p>Юзер: {{ username }}</p>
    <p>{{ username }} знает фреймворк: {{ favoriteFramework }}</p>

    <label for="framework">
      Любимый фреймворк:
      <input id="framework" type="text" [(ngModel)]="favoriteFramework"/>
    </label>

    <button (click)="onSend()">Отправить выбор</button>
  `,
  imports: [FormsModule],
})
export class App {
  username = 'Иван';
  favoriteFramework = '';
  
  onSend() {
    alert(this.favoriteFramework);
  }
}
