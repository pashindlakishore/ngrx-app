import { createReducer, on } from "@ngrx/store";
import { Action } from "@ngrx/store";
import { addProduct } from "../actions/product.actions";
import { Product } from "../models/product.model";


const initialState : Array<Product> = [

    {   

        id : '23232-32323-23232',
        name : 'TV',
        price : 1000

    }

];

const reducer = createReducer(

    initialState,

    on(addProduct, (state, action) => {

     return [...state,action.product]    

    }
    )

    

);

export function productReducer(state : Array<Product> | undefined, action : Action){


    return reducer(state,action);

}


