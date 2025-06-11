import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <button (click)="onClick($event)"> Кнопка </button> <br/> <br/>
      <button (click)="$event.stopPropagation()"> Кнопка </button> <br/><br/>

      <div (mouseover)="onMouseOver()"> Какой-то текст </div>
  `,
})
export class App {
  onClick(event: MouseEvent) {
      event.stopPropagation()
      console.log('Обработал клик по кнопочке', event);
  }

  onMouseOver() {
    console.log('Обработали наведение мышью');
  }
}
