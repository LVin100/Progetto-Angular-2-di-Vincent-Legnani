import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FruitsService {

  constructor(private http: HttpClient) {this.getFruits("all"); }

  fruits = <any>[];

  getFruits(fruitName: string){
    console.log("dentro getFruits");

    this.getUrl(fruitName).subscribe((data: any)=>{
      this.fruits=data;
      console.log(this.fruits);
    },
    err=>(alert("No Fruit Found.")));
  }

  getUrl(fruitName: string){
    return this.http.get(`/api/fruit/${fruitName}`)


  }
  showDetails(nome: string){
    let fruit = document.getElementById(nome+"-details");

console.log(nome+"-details")
     if(fruit?.classList.contains("hidden")){
       fruit?.classList.remove("hidden");
       console.log("remove hidden class");
     }
     else if(!fruit?.classList.contains("hidden")){
      fruit?.classList.add("hidden");
      console.log("add hidden class");
   }
  }

  searchFruits(term:string):Observable<any>{
    if(!term.trim()){
      return of([]);
    }
    return this.getUrl(term);
  }

}
