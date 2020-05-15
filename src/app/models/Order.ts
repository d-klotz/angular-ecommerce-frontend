import { PaymentMethod } from './PaymentMethod';
import { ShippingMethod } from './ShippingMethod';
import { ProductQuantity } from './ProductQuantity';
import { OrderStatus } from './OrderStatus';

export class Order {
  public id?: number;
  public customerId: number;
  public paymentMethod: PaymentMethod;
  public shippingMethod: ShippingMethod;
  public orderItems: ProductQuantity[];
  public status: OrderStatus;
  public creationDate?: Date;
  public totalAmount?: number;
}
