import React from 'react';
import { graphql } from 'react-apollo';
import { getBooksQuery } from '../queries/queries';
import BookDetail from './BookDetail';
class BookList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookId: null
        }
    }
    displayBooks() {
        console.log(this.props);
        const data = this.props.data;
        if (data.loading) return (<div> Loading books...</div >);
        else return data.books.map(book => {
            return (
                <li key={book.id} onClick={e => {this.setState({bookId: book.id})}}>{book.name}</li>
            );
        });

    }
    render() {
        return (
            <div>
                <ul id="book-list">
                    {this.displayBooks()}
                </ul>
                <BookDetail bookId = {this.state.bookId}/>
            </div>
        );
    }
}
export default graphql(getBooksQuery)(BookList);