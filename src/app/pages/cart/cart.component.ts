import { Component, OnInit } from '@angular/core';
import { CheckoutProduct } from 'src/app/models/CheckoutProduct';
import { ProductService } from 'src/app/services/product.service';
import { ObservableService } from 'src/app/services/observable.service';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public selectedProducts: CheckoutProduct[] = [];
  public summary: number;
  public faExclamationCircle = faExclamationCircle;

  constructor(
    private productService: ProductService,
    private observableService: ObservableService,
    private router: Router,
    private orderService: OrderService) { }

  ngOnInit(): void {
    this.observableService.CartProductsChanged$.subscribe(productsIds => {
      this.selectedProducts = [];
      this.summary = null;
      this.selectedProducts = this.getSelectedProducts(productsIds);
    });
  }

  private getSelectedProducts(productsIds: any): CheckoutProduct[] {
    const productQuantityObj = {};
    const selectedProducts: CheckoutProduct[] = [];

    [...new Set<any>(productsIds)].forEach( productId => {
      productQuantityObj[productId] = this.checkQuantityByProductId(productId, productsIds);
      this.productService.getProductById(Number(productId))
        .subscribe(product => {
          const selectedProduct: CheckoutProduct = new CheckoutProduct(
            product.id,
            product.name,
            product.description,
            product.mainImage,
            product.price,
            productQuantityObj[product.id]
          )
          selectedProducts.push(selectedProduct)
        });
    });
    this.orderService.setProductsToCheckout(productQuantityObj);
    return selectedProducts;
  }

  private checkQuantityByProductId(productId, productIds) {
    return productIds.filter(id => id === productId).length;
  }

  public onIncreaseClick(selectedProduct: CheckoutProduct) {
    this.observableService.addProductToCart(selectedProduct);
  }

  public onDecreaseClick(selectedProduct: CheckoutProduct) {
    if(selectedProduct.quantity > 1) {
      this.observableService.removeProductFromCart(selectedProduct);
    } else {
      const result = confirm('Are you sure you want to remove this product?');
      if(result) {
        this.observableService.removeProductFromCart(selectedProduct);
      }
    }
  }

  public getSummary():number {
    return this.selectedProducts.map(product => product.value())
      .reduce((prev, value) => prev + value, 0);
  }

  public goToProductDetail(productId: number) {
    this.router.navigate([`details/${productId}`])
  }

  public goToCheckout() {
    this.router.navigate(['checkout']);
  }

  public goToProducts() {
    this.router.navigate(['/']);
  }
}
