import { Component, OnInit } from '@angular/core';
import { BOOKS_QUERY } from './queries';
import { CREATE_BOOK, UPDATE_BOOK, DELETE_BOOK } from './mutations';
import { Book } from './book.inteface';
import { Apollo } from 'apollo-angular';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  books: Book[];
  name_filter = '';
  is_editting = false;
  currentBook: Book;

  constructor(private apollo: Apollo) { 
    this.currentBook = { id: -1, name: '', description: '', price:0.00, author:-1  };
    this.filter();
  }


  save() {
    let mutation = CREATE_BOOK;
    const variables = {
      input: { name: this.currentBook.name, editorial: this.currentBook.description,
      price: this.currentBook.price, author: this.currentBook.author }
    };
    if(this.currentBook.id > 0){
      variables['id'] = this.currentBook.id;
      mutation = UPDATE_BOOK;
    }
    this.apollo.mutate({
      mutation: mutation,
      variables: variables
    }).subscribe(() => {
      this.currentBook = { id: -1, name: '', description:'', price: 0.00, author: -1 };
      this.is_editting = false;
      this.filter();
    });
  }

  filter() {
    this.apollo.watchQuery({
      query: BOOKS_QUERY,
      fetchPolicy: 'network-only',
      variables: {
        name: this.name_filter
      }
    }).valueChanges.subscribe(result => {
      this.books = result.data.books;
    });
  }
}
