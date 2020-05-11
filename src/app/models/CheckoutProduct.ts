import { Product } from './Product';

export class CheckoutProduct extends Product{

  constructor(id, name, description, mainImage, price, public quantity: number) {
    super(id, name, description, mainImage, price);
  }

  value(): number {
    return this.price * this.quantity;
  }
};
