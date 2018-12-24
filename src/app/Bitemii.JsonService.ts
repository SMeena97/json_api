import { Injectable } from '@angular/core';
import { JCustomer } from './Bitemii.CustomerModel';
import { Http , Response} from '@angular/http';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/observable/of';

@Injectable()
export class CustomerService{
    constructor(private http:Http){

    }

    // getCustomers() : Observable<JCustomer[]>{
    //     return this.http.get('../assets/CustomerData.json')
    //     .map((resp : JCustomer) => resp .json());

    // }
    getCustomers() : Observable<JCustomer[]>{
    //getCustomers() {
        return this.http.get('../assets/CustomerData.json')
        .pipe(map(res => res.json()));
        
      }
}