import { Cart } from './../models/cart.model';
import { CartService } from './../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [CartService]
})
export class CartComponent implements OnInit {

  constructor(private cartService:CartService) { }
  cart:Cart[];
  ngOnInit(): void {
    // Make the HTTP request:
    this.cartService.get('123/cart').subscribe(data => {
          //  this.cart = data['results'];
          console.log(data);
          
    });
  }

}
