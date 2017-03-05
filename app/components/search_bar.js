import React, { Component } from 'react';
// const Component = React.Component;}

/*
const SearchBar = () => {
    return <input />;
};
*/

/*
class SearchBar extends React.Component {
    render() {
        return (
            <input />
            )
    }
}
*/

/*
class SearchBar extends Component {
    render() {
        return <input onChange={this.onInputChange} />;
    }

    onInputChange(event) {
        // console.log(event);
        console.log(event.target.value);
    }
}
*/

/*
class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term : '' };
    }

    render() {
        return <input onChange={(event) => console.log(event.target.value)} />;
    }
}
*/

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term : '' };
    }

    render() {
        return (
            <div className="search-bar">
               <input
                   value = {this.state.term}
                   onChange={ event => this.onInputChange( event.target.value) } />
            </div>
            );
    }

    onInputChange(term) {
        this.setState({ term });
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;