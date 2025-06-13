import {Component} from '@angular/core';

@Component({
  selector: 'kitchen',
  template: `На кухне мы готовим: {{ getDishes() }}`,
})
export class Kitchen {
    dishes = ['Цезарь', 'Пицца', 'Паста'];

    getDishes(): string[] {
        return this.dishes;
    }

    getDish(id: number) {
        return this.dishes[id];
    }
}
