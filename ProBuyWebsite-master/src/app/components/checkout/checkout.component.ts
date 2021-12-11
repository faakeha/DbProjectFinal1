import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  errormsg:any;
  successmsg:any;
  getparamid:any;
  isAddress: boolean = false;
  cartItems:any;
  cart:any;
  contact:any;

  constructor(private service:ProductService, private router:ActivatedRoute, private router2:Router) { }

  ngOnInit(): void {
    this.getCartItems();

  }

  userForm = new FormGroup({
    'City': new FormControl('', Validators.required),
    'Area': new FormControl('', Validators.required),
    'Street': new FormControl('', Validators.required),
    'House_no': new FormControl('', Validators.required),
    'Contact': new FormControl('', Validators.required)
  });

  userSubmit(): void{
    if(this.userForm.valid){
     // console.log(this.userForm.value);
      this.contact = this.userForm.value.Contact;
      console.log('sfkn', this.contact);
      this.service.insertAddress(this.userForm.value).subscribe((res) => {
        console.log(res, "res==> (userSubmit working)");
        
        console.log(res, res.message);
        this.successmsg=res.message;
        
        if(res.message == 'success'){
            this.isAddress = true;
            
        }
        
      });
      console.log('cnt', this.contact);
      this.service.insertOrder(this.userForm.value).subscribe((res)=> {
        
        console.log('insert order');
      });
      this.service.generateTracking(this.userForm.value).subscribe((res)=>{
        console.log('insert tracker');
      });
      
      this.router2.navigate(['tracker'])
      this.userForm.reset();
    }
    else{
      this.errormsg = 'All fields are required!';
    }
    
  }

  getCartItems(){
    this.service.getCart().subscribe((res) => {
      console.log('res', res);
      this.cartItems = res.data[0];
      this.cart=res.data[1];
    });
  }

}
