import { Cart } from './../models/cart.model';
import { CartService } from './../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [CartService]
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService) { }
  items: Cart[];
  total:number;
  ngOnInit(): void {
    // Make the HTTP request:
    this.loadCart();
  }

  remove(id: string) {
    this.cartService.remove('http://localhost:8080/123/cart/'+id).subscribe(data => {
      //  this.cart = data['results'];
      // this.items = <Cart[]>data;
      this.loadCart();
    });
  }

  update(index: number) {
    this.cartService.update('http://localhost:8080/123/cart/', [this.items[index]]).subscribe(data => {
      //  this.cart = data['results'];
      this.loadCart();
    });
  }

  loadCart()
  {
    this.cartService.get('http://localhost:8080/123/cart/').subscribe(data => {
      //  this.cart = data['results'];
      this.items = <Cart[]>data;
      this.items.map((val:Cart) => val["cummulativeprice"] = val["quantity"] * val["unitPrice"]);
      this.calculateTotal();
    })  ;
  }
  calculateTotal()
  {
    this.total = this.items.reduce((sum, item) => sum + (item["unitPrice"] * item["quantity"]), 0 );
  }

  getTotal() {
    return this.total;
  }

}
