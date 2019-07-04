import React, { Component } from 'react';

export default class UserQueryWithClassComponent extends Component {
    state = {
        userQuery: ''
    }
    updateuserQuery = (event) => {
        this.setState({
            userQuery: event.target.value
        });
        console.log('Query', this.state.userQuery);
    }
    searchQuery = () => {
        window.open(`https://google.com/search?q=${this.state.userQuery}`, '_blank');
    }

    render() {
        return (
            <div className="form">
                <input value={this.state.userQuery} onChange={this.updateuserQuery} />
                <button class="btn btn-primary mb-2" onClick={this.searchQuery}>Search</button>
            </div>
        )
    }
}