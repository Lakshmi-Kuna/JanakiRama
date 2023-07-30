import { Component } from '@angular/core';
import { ProductDetails } from 'src/app/contracts/product-details';
import { AmazonProductsService } from 'src/app/service/amazon-products.service';

@Component({
  selector: 'app-amazon-mens',
  templateUrl: './amazon-mens.component.html',
  styleUrls: ['./amazon-mens.component.css']
})
export class AmazonMensComponent {
public mensProducts:ProductDetails[]=[];
constructor(private _serv:AmazonProductsService){}

ngOnInit(){
  this._serv.GetProductByCategoryName("men's clothing")
  .subscribe(data=>{
    this.mensProducts=data
  });
}
}
