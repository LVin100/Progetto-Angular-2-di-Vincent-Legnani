import { Component, OnInit } from '@angular/core';
import { FruitsService } from '../fruits.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public fruitsService: FruitsService) { }

  ngOnInit(): void {

  }


}
