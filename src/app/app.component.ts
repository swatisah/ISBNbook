import { Component } from '@angular/core';
import { BookService } from './book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'component-interaction';
id:any='';
result:any='';
constructor(private bookService:BookService){}



onEnter()
{
  this.bookService.getdetails(this.id)
    .subscribe(
      (response) =>{ console.log(response)},
      (error) => console.log(error)
    );
}
}