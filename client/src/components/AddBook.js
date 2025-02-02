import React from 'react';
import { graphql } from 'react-apollo';
import { getAuthorsQuery, addBookMutation, getBooksQuery } from '../queries/queries';
import { flowRight as compose } from 'lodash';

class AddBook extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            genre: "",
            authorId: ""
        }
        this.submitForm = this.submitForm.bind(this);
    }
    submitForm(event) {
        event.preventDefault();
        console.log(this.state);
        this.props.addBookMutation({
            variables: {
                name: this.state.name,
                genre: this.state.genre,
                authorId: this.state.authorId
            },
            refetchQueries: [{ query: getBooksQuery }]
        });
    }
    displayAuthors() {
        const data = this.props.getAuthorsQuery;
        if (data.loading) return (<option>Loading authors...</option>);
        else return data.authors.map(author => {
            return (
                <option key={author.id} value={author.id}>{author.name}</option>
            );
        });
    }
    render() {
        return (
            <form id="add-book" onSubmit={this.submitForm}>
                <div className="field">
                    <label>Book name:</label>
                    <input type="text" onChange={e => this.setState({ name: e.target.value })} />
                </div>
                <div className="field">
                    <label>Genre:</label>
                    <input type="text" onChange={e => this.setState({ genre: e.target.value })} />
                </div>
                <div className="field">
                    <label>Author:</label>
                    <select onChange={e => this.setState({ authorId: e.target.value })}>
                        <option>Select author</option>
                        {this.displayAuthors()}
                    </select>
                </div>
                <button>+</button>
            </form>
        );
    }
}
// export default graphql(getAuthorsQuery)(AddBook);
export default compose(
    graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
    graphql(addBookMutation, { name: "addBookMutation" })
)(AddBook);