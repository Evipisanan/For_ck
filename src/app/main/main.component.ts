import {Component, OnInit} from '@angular/core';
import {MainService} from '../services/main.service';
import {Device} from '../models/Device';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  // devices: Device[];
  allData: Device[];
  allData2: Device[];
  currEnergy: any;
  currEnergy2: any;
  totalEnergy: any = 0.0;
  totalEnergy2: any = 0.0;

  constructor(private mainService: MainService) {
  }

  ngOnInit() {
    this.mainService.getAllData()
      .subscribe(data => {
        // this.devices = data;
        this.allData = data[0];
        this.calEnergy();
      });

    this.mainService.getAllData2()
      .subscribe(data => {
        // this.devices = data;
        this.allData2 = data[0]
        this.calEnergy2();
      });
  }

  // clearData(){}
  calEnergy() {
    for (let i = 0; i < this.allData.length; i++) {
      this.currEnergy = parseFloat(this.allData[i].current);
      this.totalEnergy = this.currEnergy + this.totalEnergy;
    }
    // console.log('total ' + this.totalEnergy);
  }


  calEnergy2() {
    for (let i = 0; i < this.allData2.length; i++) {
      this.currEnergy2 = parseFloat(this.allData2[i].current);
      this.totalEnergy2 = this.currEnergy2 + this.totalEnergy;
    }
    // console.log('total ' + this.totalEnergy2);
  }
}
