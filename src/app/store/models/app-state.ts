import { Product } from "./product.model"; 

export interface AppState{

    readonly productStore : Array<Product>;

}