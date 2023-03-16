import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { InquiryComponent } from '../inquiry/inquiry.component';

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateTeam implements CanDeactivate<InquiryComponent> {
  
  
  canDeactivate(
  component: InquiryComponent,
  currentRoute: ActivatedRouteSnapshot,
  currentState: RouterStateSnapshot,
  nextState: RouterStateSnapshot
  ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
    return component.canExit();
    }
    }  

