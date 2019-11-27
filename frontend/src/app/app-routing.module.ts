import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { OrderListComponent } from './order-list/order-list.component';
import { CheckedOrderListComponent } from './checked-order-list/checked-order-list.component';
import { MenuComponent } from './menu/menu.component';
import { MenuDetailComponent } from './menu/menu-detail/menu-detail.component';
import { SeatComponent } from './master/seat/seat.component';

const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'order-list', component: OrderListComponent },
  { path: 'checked-order-list', component: CheckedOrderListComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'menu/detail/:id', component: MenuDetailComponent },
  { path: 'meintenance/master/seat', component: SeatComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
