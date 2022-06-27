import React, { Component } from 'react';
import axios from 'axios';
import User from './User';

export class UserItem extends Component {

    state = {
        user: {}
    }

    componentWillMount() {
        let login = this.props.match.params.login

        axios.get(`https://api.github.com/users/${login}`)
            .then(response => {
                this.setState({
                    user: response.data
                })
            })
    }

    render() {
        const {user} = this.state

        return (
            <div>
                <User user={user} />
            </div>
        )
    }
}

export default UserItem