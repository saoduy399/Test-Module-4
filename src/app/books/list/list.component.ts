import { Component, OnInit } from '@angular/core';
import {Book} from "../../book";
import {ReadingServiceService} from "../../services/reading-service.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  books:Book[]=[];

  constructor(private readingService: ReadingServiceService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.books = this.readingService.getAll()
  }

  delete(index: number){
    if(confirm('Are you sure?')){
      this.readingService.deleteBook(index);
    }
  }
}
