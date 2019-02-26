import { Injectable } from '@angular/core';
import { Http} from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class BookService {
    loading: boolean;


  constructor(private http : Http) { }

  getdetails(id){
  
      return this.http.get('https://www.booknomads.com/api/v0/isbn/'+id);
  }
}
