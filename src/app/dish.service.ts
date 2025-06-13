import {Injectable} from '@angular/core';

@Injectable()
export class DishService {
    private dishes = ['Цезарь', 'Пицца', 'Паста'];

    constructor() {
        console.log('Я в конструкторе DishService')
    }

    getDishes(): string[] {
        return this.dishes;
    }

    getDish(id: number): string {
        return this.dishes[id];
    }
}