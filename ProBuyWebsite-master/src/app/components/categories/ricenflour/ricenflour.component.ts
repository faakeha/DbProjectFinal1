import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-ricenflour',
  templateUrl: './ricenflour.component.html',
  styleUrls: ['./ricenflour.component.scss']
})
export class RicenflourComponent implements OnInit {

  constructor(private service: ProductService) { }
  errormsg:any;
  successmsg:any;
  get:any;
  isAddtoCart: boolean = false;
  data:any;
  readData:any;
  falak:any;
  guard:any;
  sunridge:any;
  qty:any = '1';
  clicked: boolean = false;

  ngOnInit(): void {
    console.log('ngonit working');
    this.getProductsData();

 
    
  }

  getProductsData(){
    console.log('fetching products started');
    this.service.getProducts(7, ["falak", "guard", "sunridge"]).subscribe((res) => {
      console.log('res>', res.data);
      this.readData = res.data; 
      console.log('readdata>', this.readData);
      this.falak = this.readData[0];
      this.guard = this.readData[1];
      this.sunridge = this.readData[2];
      console.log('res>', this.falak);
  //    console.log('res bunny>', this.bunny);
    }); 
     
    }

    addToCart(prod:any, qty: number){
      if(this.clicked == false){
      this.service.insertIntoCart(prod, qty).subscribe((res) => {
        console.log('res', res.data);
        if(res.message == 'inserted into cart'){
          this.clicked = true;
        }
  
      });
    }
    else if(this.clicked == true){
      this.errormsg = 'Item already added. Go to your cart to change the quantity.';
    }
  
    }





}
