import {Component} from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  template: `
    Юзер: {{ username }}
  `,
})
export class User {
  username = 'Иван';
}

@Component({
  selector: 'app-root',
  template: `<section><app-user /></section>`,
  imports: [User]
})
export class App {}
