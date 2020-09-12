 import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  //controller
  constructor(){
    this.customerStatus=Math.random()>0.5?'Online':'Offline';
  }
  name = 'James';
  title='demofortraining';//model
  number=10000;
  isavail=false;

  week=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

  customerid=111;
  customerStatus='offline';

  getCustomerStatus(){
    return this.customerStatus;
  }
  getmethecolor(){
    ;
  }
}
