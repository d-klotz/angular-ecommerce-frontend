import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
import { HeaderComponent } from './components/header/header.component';
import { CartButtonComponent } from './components/cart-button/cart-button.component';
import { BagComponent } from './components/bag/bag.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ChipComponent } from './components/chip/chip.component';
import { CardComponent } from './components/card/card.component';
import { PricePipe } from './pipes/price.pipe';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AuthInterceptor } from "./security/auth.interceptor";
import { LogoComponent } from './components/logo/logo.component';
import { AboutComponent } from './pages/about/about.component';
import { ButtonComponent } from './components/button/button.component';
import { PaymentMethodPipe } from './pipes/payment-method.pipe';

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
    HeaderComponent,
    CartButtonComponent,
    BagComponent,
    CategoriesComponent,
    ChipComponent,
    CardComponent,
    PricePipe,
    SidebarComponent,
    LogoComponent,
    AboutComponent,
    ButtonComponent,
    PaymentMethodPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
