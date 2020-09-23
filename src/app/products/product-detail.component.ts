import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';

import { IProduct } from './product';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle ="Product Detail";
  product: IProduct;
  constructor(private route: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.product = {
      'productId': id,
      'productName':'Leaf Rake',
      'productCode':'GDN-0011',
      'releaseDate':'March 19, 2020',
      'description': 'Leaf rake with 48inch wodden handle.',
      'price':19.95,
      'starRating':3.2,
      'imageUrl':'assets/images/leaf_rake.png'
    }
  }

  onBack() : void{
    this.router.navigate(['/products'])
  }
}
  