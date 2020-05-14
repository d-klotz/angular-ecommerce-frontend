import { PaymentMethod } from './PaymentMethod';
import { ShippingMethod } from './ShippingMethod';
import { CheckoutProduct } from './CheckoutProduct';
import { ProductQuantity } from './ProductQuantity';

export class Order {
  public id?: number;
  public customerId: number;
  public paymentMethod: PaymentMethod;
  public shippingMethod: ShippingMethod;
  public orderItems: ProductQuantity[];
}
