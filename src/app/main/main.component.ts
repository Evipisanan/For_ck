import { Component, OnInit } from '@angular/core';
import {MainService} from '../services/main.service';
import {Device} from '../models/Device';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  devices: Device[];
  constructor(private mainService: MainService ) { }

  ngOnInit() {
    this.mainService.getAllData()
      .subscribe(data => {
        this.devices = data;
        console.log(data);
      });

  }
  // clearData(){}
}
