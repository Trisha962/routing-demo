import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent {
num:any;
constructor(private ar:ActivatedRoute){}

ngOnInit(){
  this.ar.paramMap.subscribe((p:ParamMap)=>{
    this.num=p.get('url');
    })
}
}
