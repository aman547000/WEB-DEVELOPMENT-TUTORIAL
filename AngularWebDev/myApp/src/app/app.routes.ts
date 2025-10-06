import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Service } from './service/service';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Menu } from './menu/menu';

export const routes: Routes = [
    {
        path: 'Home',component:Home
    },
    {
        path: 'Service',component:Service
    },
    {
        path: 'About',component:About
    },
    {
        path: 'Contact',component:Contact
    },
    {
        path:'Menu', component:Menu
    }
];
