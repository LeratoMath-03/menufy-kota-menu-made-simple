import { Routes } from '@angular/router';
import { MenuBrowse } from './customer/menu-browse/menu-browse';


export const routes: Routes = 
[
    {path: '', redirectTo: 'order', pathMatch: 'full'},
    {path: 'order', component: MenuBrowse},
];
