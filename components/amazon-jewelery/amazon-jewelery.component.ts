import { Component } from '@angular/core';
import { ProductDetails } from 'src/app/contracts/product-details';
import { AmazonProductsService } from 'src/app/service/amazon-products.service';

@Component({
  selector: 'app-amazon-jewelery',
  templateUrl: './amazon-jewelery.component.html',
  styleUrls: ['./amazon-jewelery.component.css']
})
export class AmazonJeweleryComponent {
  public jewelery:ProductDetails[]=[];
  constructor(private _serv:AmazonProductsService){}
  
  ngOnInit(){
    this._serv.GetProductByCategoryName("jewelery")
    .subscribe(data=>{
      this.jewelery=data
    });
  }
}
