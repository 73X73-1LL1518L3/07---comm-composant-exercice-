import { Component, Input, OnInit } from '@angular/core';
import { Order } from '../models/order.model';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent implements OnInit {

  model:Order = new Order(0,0,0,0,0);

  isCooked:boolean= false

  
  constructor() { }

  ngOnInit(): void {
  }

  startCooking():void {
    this.isCooked = true;
  }

}
