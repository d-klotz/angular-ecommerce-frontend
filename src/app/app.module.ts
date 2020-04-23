import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { DetailsComponent } from './pages/details/details.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { HomeComponent } from './pages/home/home.component';
import { NewAccountComponent } from './pages/new-account/new-account.component';
import { AccountComponent } from './pages/account/account.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { OrderDetailComponent } from './pages/order-detail/order-detail.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { CartButtonComponent } from './components/cart-button/cart-button.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DetailsComponent,
    CheckoutComponent,
    HomeComponent,
    NewAccountComponent,
    AccountComponent,
    OrdersComponent,
    OrderDetailComponent,
    SearchBarComponent,
    MenuComponent,
    HeaderComponent,
    CartButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
