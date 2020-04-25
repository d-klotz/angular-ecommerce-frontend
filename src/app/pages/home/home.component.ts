import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public products: Product[];

  constructor(
     private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.productService.getProducstByCategory()
    .subscribe(products => this.products = products.reverse());
  }

}
