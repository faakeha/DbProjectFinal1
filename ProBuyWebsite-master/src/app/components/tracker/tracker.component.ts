import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';



@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.scss']
})
export class TrackerComponent implements OnInit {
  errormsg:any;
  successmsg:any;
  getparamid:any;
  isTracker: boolean = false;
  trackerData: any;

  constructor(private service:ProductService, private router:ActivatedRoute, private router2:Router) { }

  ngOnInit(): void {
  }

  userForm = new FormGroup({
    'Email': new FormControl('', Validators.required)
  });

  userSubmit(): void{
    if(this.userForm.valid){
      console.log(this.userForm.value);
      this.service.getTracking(this.userForm.value.Email).subscribe((res) => {
        console.log(res.data, "res==> (userSubmit working)");
        this.userForm.reset();
       // console.log(res, "form reset");
        console.log(res, res.message);
        this.successmsg=res.message;
        this.trackerData=res.data;
        
        if(res.message == 'success'){
            this.isTracker = true;
            console.log(res, "res==> (success working)");
         //   this.router2.navigate(['home'])
        }
      });
    }
    else{
      this.errormsg = 'All fields are required!';
    }
    
  }


}
