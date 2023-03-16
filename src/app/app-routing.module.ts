import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardViewComponent } from './card-view/card-view.component';
import { CourseMaterialComponent } from './course-material/course-material.component';
import { InquiryComponent } from './inquiry/inquiry.component';
import { LoginComponent } from './login/login.component';
import { NIITComponent } from './niit/niit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductEngineeringComponent } from './product-engineering/product-engineering.component';
import { CanActivateGuard } from './services/can-activate.guard';
import { CanDeactivateTeam } from './services/can-deactivated.service';
import { SoftwareEngineeringComponent } from './software-engineering/software-engineering.component';

const routes: Routes = [
  {path:'', redirectTo:'/home',pathMatch:'full'},
{path:'home',component:NIITComponent},

{path:'software',component:SoftwareEngineeringComponent},
{path:'product',component:ProductEngineeringComponent},

{path:'cardview/:url',component:CardViewComponent},
{path:'login',component:LoginComponent},
{path:'coursematerial',component:CourseMaterialComponent,canActivate:[CanActivateGuard]},
{path:'inquiry',component:InquiryComponent,canDeactivate:[CanDeactivateTeam]},
{path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
