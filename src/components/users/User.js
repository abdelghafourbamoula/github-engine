import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export class User extends Component {

    render() {
        const { avatar_url, login, html_url, repos_url } = this.props.user;

        return (
            <div>
                <div className="card my-2">
                    <img className="card-img-top" src={avatar_url} alt="" />
                    <div className="card-body">
                        <h4 className="card-title">{login}</h4>
                        <p className="card-text">
                            <Link to={'/users/'+login} className="btn btn-sm btn-success m-1">Show More</Link>
                            <Link href={repos_url}  className="btn btn-sm btn-warning m-1">Repositpries</Link>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default User