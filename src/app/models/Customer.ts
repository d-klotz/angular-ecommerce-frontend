import { PaymentMethod } from './PaymentMethod';
import { Profile } from './Profile';
import { User } from './User';

export interface Customer extends User{
    id?: number;
    name: string;
    address: string;
    number: number;
    complement?: string;
    mainPaymentMethod: PaymentMethod;
    profile?: Profile;
}
