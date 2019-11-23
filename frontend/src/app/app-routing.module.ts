import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { OrderListComponent } from './order-list/order-list.component';
import { CheckedOrderListComponent } from './checked-order-list/checked-order-list.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'order-list', component: OrderListComponent },
  { path: 'checked-order-list', component: CheckedOrderListComponent },
  { path: 'menu', component: MenuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
