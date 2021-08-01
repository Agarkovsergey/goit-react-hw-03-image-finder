import React, { Component } from 'react';

import { search } from './api/pixabay'

import Header from './components/Header/Header';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';

import './App.css';



class App extends Component {
  state = {
    images: [],
  };

  handleSearch = (query) => {
    search(query, 1)
      .then(response => this.setState({ images: response.data.hits })
    );
  }

  render() {
    const { images } = this.state;

    return(
      <div>
        <Header search={this.handleSearch}/>
        <ImageGallery images={images} />
        <Button />
        
      </div>
    )
  }
}

export default App;
