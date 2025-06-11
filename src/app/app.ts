import {Component, input, output} from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <p>Имя пользователя: {{ name() }} и ID {{id()}} </p>
    <button (click)="onLogout()"> Выйти </button>
  `,
})
export class User {
    id = input<number>(0);
    name = input<string>('username');
    logoutEvent = output<number>();

    onLogout() {
      console.log('Выход');
      this.logoutEvent.emit(this.id());
    }
}

@Component({
  selector: 'app-root',
  template: `
      <app-user [name]="name" (logoutEvent)="onLogout($event)"/>
  `,
  imports: [User],
})
export class App {
  name = 'Иван';

  onLogout(id: number) {
    console.log('В компоненте APP получили событие выхода от', id);
  }
}
