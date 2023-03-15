import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardViewComponent } from './card-view/card-view.component';
import { NIITComponent } from './niit/niit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductEngineeringComponent } from './product-engineering/product-engineering.component';
import { SoftwareEngineeringComponent } from './software-engineering/software-engineering.component';

const routes: Routes = [
  {path:'', redirectTo:'/home',pathMatch:'full'},
{path:'home',component:NIITComponent},

{path:'software',component:SoftwareEngineeringComponent},
{path:'product',component:ProductEngineeringComponent},
{path:'cardview/:url',component:CardViewComponent},
{path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
