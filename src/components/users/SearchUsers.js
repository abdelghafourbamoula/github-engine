import React, { Component } from 'react'

export class SearchUsers extends Component {

  state = {
    search: ''
  }

  handleForm = (e) => {
    this.setState({
      search: e.target.value
    })
  }

  searchUsers = (e) => {
    e.preventDefault()
    this.props.getSearchUsers(this.state.search)
  }

  render() {
    const {search} = this.state

    return (
      <div className='col-md-12'>
        <form onSubmit={this.searchUsers} className='row'>
              <div className="form-group col-md-8">
                <input value={search} onChange={this.handleForm} type="text" placeholder='search users ...' className="form-control" />
              </div>
              <div className="col-md-4">
                <button className="btn btn-primary btn-block">Search</button>
              </div>
        </form>
      </div>
    )
  }
}

export default SearchUsers