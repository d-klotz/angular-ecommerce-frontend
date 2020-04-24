import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // public products: Product[];
  public products = [1,2,3,4,5,6,8]

  constructor(
     private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.productService.getProducstByCategory()
    .subscribe(products => console.log(products));
  }

}
