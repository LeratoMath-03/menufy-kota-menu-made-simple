import { Routes } from '@angular/router';
import { MenuBrowse } from './customer/menu-browse/menu-browse';
import { Cart } from './customer/cart/cart'


export const routes: Routes = 
[
    {path: '', redirectTo: 'order', pathMatch: 'full'},
    {path: 'order', component: MenuBrowse},
    {path: 'cart', component: Cart},
];
