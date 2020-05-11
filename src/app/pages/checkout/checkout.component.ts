import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';
import { CheckoutProduct } from 'src/app/models/CheckoutProduct';
import { ObservableService } from 'src/app/services/observable.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  selectedProducts: CheckoutProduct[] = [];

  constructor(
    private productService: ProductService,
    private observableService: ObservableService) { }

  ngOnInit(): void {
    this.observableService.CartProductsChanged$.subscribe(productsIds => {
      this.getSelectedProducts(productsIds);
    });
  }

  private getSelectedProducts(productsIds: any) {
    const productQuantityObj = {};
    this.selectedProducts = [];

    [...new Set<any>(productsIds)].forEach( productId => {
      productQuantityObj[productId] = this.checkQuantityByProductId(productId, productsIds);
      this.productService.getProductById(Number(productId))
        .subscribe(product => {
          const selectedProduct: CheckoutProduct = {
            id: product.id,
            name: product.name,
            description: product.description,
            mainImage: product.mainImage,
            price: product.price,
            quantity: productQuantityObj[product.id]
          }
          this.selectedProducts.push(selectedProduct)
        });
    });
  }

  private checkQuantityByProductId(productId, productIds) {
    return productIds.filter(id => id === productId).length;
  }

  onIncreaseClick(selectedProduct: CheckoutProduct) {
    this.observableService.addProductToCart(selectedProduct);
  }

  // todo: implement confirmation modal and add/delete product from observable service
  onDecreaseClick(selectedProduct: CheckoutProduct) {
    if(selectedProduct.quantity > 1) {
      this.observableService.removeProductFromCart(selectedProduct);
    } else {
      const result = confirm('Are you sure you want to remove this product?');
      if(result) {
        this.observableService.removeProductFromCart(selectedProduct);
      }
    }
  }

}
