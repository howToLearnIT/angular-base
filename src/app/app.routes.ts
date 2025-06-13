import {Routes} from '@angular/router';
import {HomePage} from './pages/home-page';
import {UserPage} from './pages/user-page';

export const routes: Routes = [
    {
        path: '',
        title: 'Домашняя страница',
        component: HomePage,
    },
    {
        path: 'user', // http://localhost:4200/user
        title: 'Пользователь',
        component: UserPage,
    },
];