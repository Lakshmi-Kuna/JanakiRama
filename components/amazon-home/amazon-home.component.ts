import { Component } from '@angular/core';
import { ProductDetails } from 'src/app/contracts/product-details';
import { AmazonProductsService } from 'src/app/service/amazon-products.service';

@Component({
  selector: 'app-amazon-home',
  templateUrl: './amazon-home.component.html',
  styleUrls: ['./amazon-home.component.css']
})
export class AmazonHomeComponent {
public products:ProductDetails[]=[];
constructor(private _serv:AmazonProductsService){}
ngOnInit(){
  this._serv.GetProducts().subscribe(data=>{
    this.products=data;
  })
}
}
