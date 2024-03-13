import { Component } from '@angular/core';
import {categories} from '../categories';
import { Product } from '../products';
// import { products } from '../products';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  categories = [...categories];


  share(link: string) {
    window.open('https://t.me/share/url?url='+link);
  }
  delete_from(myproduct: Product, myproducts: Product[]){
    const index = myproducts.findIndex(p => p.id === myproduct.id);
    if (index !== -1) {
      myproducts.splice(index, 1);
  }
  }

  onNotify() {
    window.alert('You will be notified when the product');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/