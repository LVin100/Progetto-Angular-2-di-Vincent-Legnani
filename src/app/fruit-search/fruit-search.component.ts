import { Component, OnInit } from '@angular/core';
import { FruitsService } from '../fruits.service';
import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

@Component({
  selector: 'app-fruit-search',
  templateUrl: './fruit-search.component.html',
  styleUrls: ['./fruit-search.component.css']
})
export class FruitSearchComponent implements OnInit {
private searchTerms = new Subject<string>();
fruits$!:Observable<any>;


  constructor(public fruitService: FruitsService) { }
  search():void {
  const sb = document.getElementById("search-box") as HTMLInputElement | null;
  const value = sb?.value as string;
  console.log(value);
  this.fruitService.getFruits(value);
}
  ngOnInit(): void {

  }

}
