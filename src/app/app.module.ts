import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { ConvertToSpacePipe } from './convert-to-space.pipe';
import { StarComponent } from './shared/star.component';
import { WelcomeComponent } from './home/welcome.component'
import { ProductsModule } from './products/products.module'
@NgModule({
  declarations: [
    AppComponent,
    ConvertToSpacePipe,
    StarComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'welcome', component:WelcomeComponent},
      {path:'', redirectTo:'welcome',pathMatch:'full' },
      {path: '**', redirectTo:'welcome',pathMatch: 'full'}
    ]),
    ProductsModule
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
