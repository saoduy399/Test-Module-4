import {Injectable} from '@angular/core';
import {Book} from "../book";

@Injectable({
  providedIn: 'root'
})
export class ReadingServiceService {

  books: Book[] = [
    {
      "id": 0,
      "name": "Elon Musk",
      "read": true,
    },
    {
      "id": 1,
      "name": "Getting Things Done",
      "read": true
    },
    {
      "id": 2,
      "name": "Long Kinh",
      "read": true
    },
    {
      "id": 3,
      "name": "Sapiens",
      "read": false
    },
    {
      "id": 4,
      "name": "Toi di Code dao",
      "read": false
    },
    {
      "id": 5,
      "name": "Hoc nghe",
      "read": false
    },
    {
      "id": 6,
      "name": "Clean Code",
      "read": false
    }
  ];

  constructor() {
  }

  getAll(): Book[]{
    return this.books
  }

  addBook(book: Book){
    this.books.push(book)
  }

  deleteBook(index: number){
    this.books.splice(index, 1);
  }

  find(){
    let book=[]
    for (let i = 0; i <this.books.length ; i++) {
      if(this.books[i].read === true){
        book.push(this.books[i])
      }
    }
    return book;
  }
}
