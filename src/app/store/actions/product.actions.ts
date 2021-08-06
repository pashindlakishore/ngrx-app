import { createAction, props } from '@ngrx/store';
import { Product } from '../models/product.model';

export const addProduct = createAction(

    '[ProductStore] Add Product',
    props<{product : Product}>()

);


export const updateProduct = createAction(

    '[ProductStore] Update Product',
    props<{product : Product}>()

);