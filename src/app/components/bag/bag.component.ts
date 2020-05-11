import { Component, OnInit } from '@angular/core';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { ObservableService } from 'src/app/services/observable.service';
import { Router } from '@angular/router';

@Component({
  selector: 'bag-icon',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.scss']
})
export class BagComponent implements OnInit {
  faShoppingBag = faShoppingBag;
  bagProducts: any[] = [];

  constructor(
    private observableService: ObservableService,
    private router: Router) { }

  ngOnInit(): void {
    this.observableService.CartProductsChanged$.subscribe(products => {
      this.bagProducts = products;
    });
  }

  navigateToCheckout() {
    this.router.navigate(['/checkout']);
  }

}
