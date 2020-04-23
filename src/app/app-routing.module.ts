import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { LoginComponent } from './pages/login/login.component';
import { NewAccountComponent } from './pages/new-account/new-account.component';
import { AccountComponent } from './pages/account/account.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { OrderDetailComponent } from './pages/order-detail/order-detail.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'new-account', component: NewAccountComponent },
  { path: 'account', component: AccountComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'orders/:id', component: OrderDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
