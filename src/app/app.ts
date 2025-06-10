import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    @if (isLoggedIn) {
      <p>Вы авторизованы!</p>
    } @else {
      <p>Авторизуйтесь!</p>
    }
  `,
})
export class App {
  isLoggedIn = false;
}
