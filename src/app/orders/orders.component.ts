import { Component, OnInit } from '@angular/core';


import {JCustomer } from '../Bitemii.CustomerModel';
import {CustomerService} from '../Bitemii.JsonService';
import { Observable} from 'rxjs';
import { HttpClient , HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  title = 'JSON Data Display';
constructor (private httpService: HttpClient) { }
customers: JCustomer [];

ngOnInit () {
  this.httpService.get('./assets/CustomerData.json').subscribe(
    data => {
      this.customers = data as JCustomer [];	 // FILL THE ARRAY WITH DATA.
      //  console.log(this.JCustomer[1]);
    },
    (err: HttpErrorResponse) => {
      console.log (err.message);
    }
  );
}
}
