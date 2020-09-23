import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductDetailComponent } from './product-detail.component';
import { ProductDetailsGuard } from './product-details.guard';
import { ProductsComponent } from './products.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forChild([
    { path:'products', component: ProductsComponent},
    {path:'products/:id',
    canActivate:[ProductDetailsGuard],
    component:ProductDetailComponent }
    ])
  ],
  exports : [ BrowserModule , FormsModule , CommonModule]
})
export class ProductsModule { }
