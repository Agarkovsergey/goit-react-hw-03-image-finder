import React, { Component } from 'react';

class Header extends Component {
  state = {
    query: '' 
  }

  onSubmit = (e) => {
    e.preventDefault()   
    
    this.props.search(this.state.query);
  }

  onInputChange = ({ target }) => {
    this.setState({
      query: target.value
    });
  }

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm"  onSubmit={this.onSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            onChange={this.onInputChange}
            value={this.state.query}
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>   
    );
  }
}

export default Header;
