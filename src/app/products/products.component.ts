import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service'

@Component({
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers:[ProductService]
})
export class ProductsComponent implements OnInit {

  constructor(private _pdtSer:ProductService) {
      }

  pageTitle: string;
  imageWidth: number = 50;
  imageMargin: number = 2;

  showImage : boolean = false;

  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string){
    this._listFilter  = value;
    this.filterProducts = this.listFilter ? this.performFilter(this._listFilter) : this.products;
  }


  //listFilter : string = 'cart';
  filterProducts: IProduct[];
  products : IProduct[];
  errorMessage: any;

  ngOnInit(): void {
    this.pageTitle = "Product List!";
    this._pdtSer.getProducts().subscribe({
      next: products => {
        this.products = products;
        this.filterProducts = this.products;
      },
      error: err => this.errorMessage = err
    });
  }

  toggle() : void{
    this.showImage = !this.showImage;
  }

  performFilter(filterBy: string): IProduct[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
     product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

 onRatingClicked(message : string): void {
    this.pageTitle = 'Product List '+ message;
  }


}
