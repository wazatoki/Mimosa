import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { HeaderComponent } from './header/header.component';
import { LayoutHeaderSidebarContentsComponent } from './layout-header-sidebar-contents/layout-header-sidebar-contents.component';
import { LayoutHeaderContentsComponent } from './layout-header-contents/layout-header-contents.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LayoutHeaderSidebarContentsComponent,
    LayoutHeaderContentsComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatListModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
