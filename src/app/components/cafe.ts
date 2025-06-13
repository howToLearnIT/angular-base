import {Component} from '@angular/core';

@Component({
  selector: 'cafe',
  template: `В кафе мы подаем: {{ getDishes() }}`,
})
export class Cafe {
    dishes = ['Цезарь', 'Пицца', 'Паста'];

    getDishes(): string[] {
        return this.dishes;
    }

    getDish(id: number) {
        return this.dishes[id];
    }
}
