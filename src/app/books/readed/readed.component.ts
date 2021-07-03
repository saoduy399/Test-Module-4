import { Component, OnInit } from '@angular/core';
import {Book} from "../../book";
import {ReadingServiceService} from "../../services/reading-service.service";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";

@Component({
  selector: 'app-readed',
  templateUrl: './readed.component.html',
  styleUrls: ['./readed.component.css']
})
export class ReadedComponent implements OnInit {

  book: Book[] =[]

  constructor(private readingService: ReadingServiceService) { }

  ngOnInit(): void {
    this.booksReaded();
  }

  // getReadedBook(){
  //   for (let i = 0; i < this.book.length; i++) {
  //     // @ts-ignore
  //     if(this.books[i].read === true){
  //       return this.book.push(this.book[i])
  //     }
  //   }
  //   return
  // }

  booksReaded(){
    this.book = this.readingService.find();
    console.log(this.book)
  }

  // eadAgain(index:number) {
  //   let id =this.book[index].id
  //   // @ts-ignore
  //   this.bookService.readAgain(id)
  //   // @ts-ignore
  //   alert("đã đọc lại quyển sách "+ this.bookService.getAll()[id].name)
  //   this.books= [];
  //   this.getList();
  // }

}
