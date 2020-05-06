import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';
import { CheckoutProduct } from 'src/app/models/CheckoutProduct';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  selectedProducts: CheckoutProduct[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getSelectedProducts();
  }

  private getSelectedProducts() {
    const productsIds = localStorage.getItem('bagProducts') ? localStorage.getItem('bagProducts').split(",") : [];
    const productQuantityObj = {};
    productsIds.forEach( productId => {
      productQuantityObj[productId] = this.checkQuantityByProductId(productId, productsIds);
    });
    [...new Set(productsIds)].forEach(id => {
      this.productService.getProductById(Number(id))
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

}
