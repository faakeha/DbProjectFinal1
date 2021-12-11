import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { ProductModelServer } from 'src/app/models/product.model';
import { ServerResponse } from 'src/app/models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: ProductModelServer[] = [];  
  name: any; 

  constructor(private productService:ProductService,
              private router: Router, private route:ActivatedRoute) { }
  
  ngOnInit(): void {
    /*
    this.productService.getAllProducts().subscribe((prods: ServerResponse)=> {
      this.products=prods.products;
      
    })
    */

    this.name = this.route.snapshot.queryParamMap.get('name');
     console.log(this.name);   
  }
  
  selectProduct(id:Number){
    this.router.navigate(['/product',id]).then();
  }

}
