import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { HeaderComponent } from './header/header.component';
import { LayoutHeaderSidebarContentsComponent } from './layout-header-sidebar-contents/layout-header-sidebar-contents.component';
import { LayoutHeaderContentsComponent } from './layout-header-contents/layout-header-contents.component';
import { IndexComponent } from './index/index.component';
import { OrderListComponent } from './order-list/order-list.component';
import { CheckedOrderListComponent } from './checked-order-list/checked-order-list.component';
import { AlertDiarogComponent } from './alert-diarog/alert-diarog.component';
import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu/menu-item/menu-item.component';
import { MenuDetailComponent } from './menu/menu-detail/menu-detail.component';
import { ItemComponent } from './master/item/item.component';
import { SeatComponent } from './master/seat/seat.component';
import { CategoryComponent } from './master/category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LayoutHeaderSidebarContentsComponent,
    LayoutHeaderContentsComponent,
    IndexComponent,
    OrderListComponent,
    CheckedOrderListComponent,
    AlertDiarogComponent,
    MenuComponent,
    MenuItemComponent,
    MenuDetailComponent,
    ItemComponent,
    SeatComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatListModule,
    MatGridListModule,
    MatButtonModule,
    MatDividerModule,
    MatExpansionModule,
    MatDialogModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
