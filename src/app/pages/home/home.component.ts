import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/Product';
import { ObservableService } from 'src/app/services/observable.service';
import { Router } from '@angular/router';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public products: Product[];
  public faExclamationCircle = faExclamationCircle;

  constructor(
     private productService: ProductService,
     private observableService: ObservableService,
     private router: Router
  ) { }

  ngOnInit(): void {
    this.observableService.categoryChanged$.subscribe(category => {
      if(this.router.url !== '/') {
        this.router.navigateByUrl('/');
      }
      this.productService.getProducstByCategory(category)
    .subscribe(products => this.products = products);
    })
  }

}
