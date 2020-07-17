import {Document} from "mongoose";
import { User } from './user';
import { Product } from './product';

interface ProductOrder {
    product: Product;
    quantitiy: number;
}

export interface Order extends Document {
    owner: User;
    totalPrice: string;
    products: ProductOrder[];
    created: Date;
}