import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDetails } from 'src/app/contracts/product-details';
import { AmazonProductsService } from 'src/app/service/amazon-products.service';

@Component({
  selector: 'app-amazon-details',
  templateUrl: './amazon-details.component.html',
  styleUrls: ['./amazon-details.component.css']
})
export class AmazonDetailsComponent {
public product:ProductDetails={
  id:0,
  category:'',
  description:'',
  image:'',
  price:0,
  title:'',
  rating:{
    rate:0,
    count:0
  }
};
public id:any='';
constructor(private _route:ActivatedRoute,private _serv:AmazonProductsService){}
ngOnInit(){
  this.id=this._route.snapshot.paramMap.get('id');
  this._serv.GetProductsById(this.id).subscribe(data=>this.product=data);
}
}
