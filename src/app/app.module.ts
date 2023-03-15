import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NIITComponent } from './niit/niit.component';
import { SoftwareEngineeringComponent } from './software-engineering/software-engineering.component';
import { ProductEngineeringComponent } from './product-engineering/product-engineering.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NIITComponent,
    SoftwareEngineeringComponent,
    ProductEngineeringComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
