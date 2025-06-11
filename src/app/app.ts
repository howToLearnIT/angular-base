import {Component, input} from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <p>Имя пользователя: {{ name() }} и ID {{id()}} </p>
  `,
})
export class User {
    id = input<number>(0);
    name = input<string>('username');
}

@Component({
  selector: 'app-root',
  template: `
      <app-user [name]="name" />

      <app-user name="Слава" />
      <app-user [id]="1" />
  `,
  imports: [User],
})
export class App {
  name = 'Иван';
}
