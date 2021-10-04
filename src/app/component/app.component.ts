import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'pm-root',
  templateUrl: '../view/app.component.html'
})
export class AppComponent implements OnInit  {
  pageTitle: string = "";

ngOnInit(){
  this.pageTitle = 'snushandeln.se'
}
}
