import { addProduct } from './store/actions/product.actions';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './store/models/app-state';
import { Product } from './store/models/product.model';
import * as uuid from 'uuid';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngrx-app';

  productList : Observable<Array<Product>>;

  constructor(private store : Store<AppState>){

    this.productList = this.store.select('productStore');

  }

  ngOnInit(){

    this.productList = this.store.select(store => store.productStore);
  }

  addNewProduct(name : string, price : string){

     let newProduct = { id : uuid.v4() , name : name, price : Number(price)};
     this.store.dispatch(addProduct({product : newProduct}))

  }


}
