import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems:any;
  cart:any;

  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.getCartItems();
  }

  getCartItems(){
    this.service.getCart().subscribe((res) => {
      this.cartItems = res.data[0];
      this.cart=res.data[1];
      console.log(this.cartItems);
    });
  }

  plusqty(pid:any, qty:any){
    qty =qty+1;
    console.log(pid, qty);
    this.service.updateQty(pid, qty).subscribe((res => {
    }));
    this.getCartItems();
  }

  minusqty(pid:any, qty:any){
    qty =qty-1;
    console.log(pid, qty);
    this.service.updateQty(pid, qty).subscribe((res => {
    }));
    this.getCartItems();
  }

  deletecart(){
    this.service.dropcart().subscribe((res) => {
    });
    this.getCartItems();
  }

}
