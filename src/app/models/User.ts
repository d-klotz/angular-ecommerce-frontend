import { PaymentMethod } from './PaymentMethod';
import { Profile } from './Profile';

export interface User {
    id?: number;
    name: string;
    email: string;
    password?: string;
    address: string;
    number: number;
    complement?: string;
    mainPaymentMethod: PaymentMethod;
    profile?: Profile;
}
