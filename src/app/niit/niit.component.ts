import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-niit',
  templateUrl: './niit.component.html',
  styleUrls: ['./niit.component.css']
})
export class NIITComponent {
  // constructor(private route:Router){}
  animation=[
    {id:1,url:"animation1",name:"Image one"},
    {id:2,url:"animation2",name:"Image two"},
    {id:3,url:"animation3",name:"Image three"},
    {id:4,url:"animation4",name:"Image Four"},
    {id:5,url:"animation5",name:"Image Five"}
  ]

}
