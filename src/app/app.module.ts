import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { LandingComponent } from './components/landing/landing.component';

const appRoutes: Routes = [
  { path: 'product/:id', component: ProductComponent },
  { path: 'shop', component: ProductsComponent },
  { path: '', component: LandingComponent }
];

@NgModule({
  declarations: [AppComponent, ProductsComponent, ProductComponent, LandingComponent],
  imports: [RouterModule.forRoot(appRoutes), BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
