import React from 'react';
import { graphql } from 'react-apollo';
import { getBookQuery } from '../queries/queries';
import { introspectionFromSchema } from 'graphql';
class BookDetail extends React.Component {
    displayBookDetail() {
        const book = this.props.data.book;
        if (book) {
            return (
                <div>
                    <h2>Name: <i>{book.name}</i></h2>
                    <p>Genre: {book.genre}</p>
                    <p>Author: {book.author.name} Age: {book.author.age}</p>
                    <p>Other books by this author:</p>
                    <ul className="other-books">
                        {book.author.books.map((item, index) => {
                            if (book.name !== item.name) return <li key={index}><i>{item.name}</i></li>
                        }
                        )
                        }
                    </ul>
                </div>
            );
        }
        else return (
            <div>No Book Selected</div>
        );
    }
    render() {
        console.log(this.props);
        return (
            <div id="book-detail">
                {this.displayBookDetail()}
            </div>
        );
    }
}
export default graphql(getBookQuery, {
    options: (props) => {
        return {
            variables: {
                id: props.bookId
            }
        }
    }
})(BookDetail);