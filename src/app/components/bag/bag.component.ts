import { Component, OnInit } from '@angular/core';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { ObservableService } from 'src/app/services/observable.service';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'bag-icon',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.scss']
})
export class BagComponent implements OnInit {
  faShoppingBag = faShoppingBag;
  bagProducts: any[] = [];

  constructor(private observableService: ObservableService) { }

  ngOnInit(): void {
    this.bagProducts = localStorage.getItem('bagProducts') ? localStorage.getItem('bagProducts').split(",") : [];
    this.observableService.productToCartChanged$.subscribe(product => {
      if(product) {
        this.bagProducts.push(product.id);
        localStorage.setItem('bagItems', this.bagProducts.toString())
      }
    })
  }

}
