import React from 'react';
import {graphql} from 'react-apollo';
import {getBooksQuery} from '../queries/queries';

class BookList extends React.Component {
  displayBooks() {
    var data = this.props.data;
    if(data.loading) {
      return (
        <div>Loading books...</div>
      );
    } else {
      // loop every book in the book list
      return data.books.map(book => {
        return (
          <li key = {book.id}>{book.name}</li>
        );
      });
    }
  }

  render() {
    console.log(this.props);
    return (
      <div id = 'main'>
        <ul id = 'book-list'>
          {this.displayBooks()}
        </ul>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
