import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import { ProductService } from 'src/app/services/product.service';
import {Router, ActivatedRoute, Route, ParamMap} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(private service:ProductService, private router:ActivatedRoute, private router2:Router) { }

  errormsg:any;
  successmsg:any;
  getparamid:any;
 isLogin: boolean = false;
  data:any;
  msg:any;
//  public isLoggedin = true;

  ngOnInit(): void {
    this.getparamid = this.router.snapshot.paramMap.get('Email,Password');
    if(this.getparamid){
      this.service.getSingleData(this.userForm.value.Email, this.userForm.value.Password).subscribe((res) => {
        console.log('res==> ', res);
        this.userForm.patchValue({
          Email:res.data[0].Email,
          Password:res.data[0].Password
        });
      });
    }
  }

  userForm = new FormGroup({
    'Email': new FormControl('', Validators.required),
    'Password': new FormControl('', Validators.required)
  });

  //insert data
  userSubmit():any{
    if(this.userForm.valid){
      console.log("form ->",this.userForm.value);
      this.service.getSingleData(this.userForm.value.Email,this.userForm.value.Password).subscribe((res) => {
        console.log("res==>", res.message);
        this.userForm.reset(); //res message = success
        this.successmsg=res.message;
        if(res.message == 'success'){
          this.isLogin = true;
          console.log(this.isLogin);
          this.router2.navigate(['home'], {queryParams: {name: res.data[0].Customer_Name}});
      }
      else if(res.message == 'error' || res.message == 'user not found'){
        this.msg = "Incorrect Email/Password!";
      }
    });
    }
    else{
      this.errormsg = 'All fields are required!';
    }
    
  }

}
