import { Component } from '@angular/core';
import { ProductDetails } from 'src/app/contracts/product-details';
import { AmazonProductsService } from 'src/app/service/amazon-products.service';

@Component({
  selector: 'app-amazon-womens',
  templateUrl: './amazon-womens.component.html',
  styleUrls: ['./amazon-womens.component.css']
})
export class AmazonWomensComponent {
  public womensProducts:ProductDetails[]=[];
  constructor(private _serv:AmazonProductsService){}
  
  ngOnInit(){
    this._serv.GetProductByCategoryName("women's clothing")
    .subscribe(data=>{
      this.womensProducts=data
    });
  }
}
