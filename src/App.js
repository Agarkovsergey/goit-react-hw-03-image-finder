import React, { Component } from 'react';
import Loader from "react-loader-spinner";

import { search } from './api/pixabay'

import Header from './components/Header/Header';
import ImageGallery from './components/ImageGallery/ImageGallery';
import LoadMoreButton from './components/LoadMoreButton/LoadMoreButton';
import Modal from './components/Modal/Modal';


import './App.css';

class App extends Component {
  state = {
    images: [],
    showModal: false,
    query: '',
    page: 1,
    loading: false,
    imageId: null,
  };

 

  handleSearch = (query) => {
    this.setState({
      loading: true,
    })
    search(query, 1)
      .then(response => this.setState({
        images: response.data.hits,
        page: 2,
        query,
        loading: false,
      })
    );
  }

  handleLoadMore = () => {
    this.setState({
      loading: true,
    })
    search(this.state.query, this.state.page)
      .then(response => {
        this.setState({
          images: [...this.state.images, ...response.data.hits],
          page: this.state.page + 1,
          loading: false,
        })
        
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      }
    );
  }

  openModal = (imageId) => () => {
    this.setState({
      showModal: true,
      imageId,
    })
  }

  closeModal = () => {
    this.setState({
      showModal: false,
      imageId: null,
    })
  }

  render() {
    const { images, showModal, imageId } = this.state;
    const image = images.find(image => image.id === imageId);
    return(
      <div>        
        {showModal && (<Modal onClose={this.closeModal} image={image}></Modal>
        )}
        <Header search={this.handleSearch}/>
        <ImageGallery images={images} onClick={this.openModal} />
        {
          this.state.loading === true && (
            <div className='loader'>
              <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000} //3 secs
                />
            </div>
          )
        }
        {
          this.state.images.length !== 0 && (
            <LoadMoreButton handleLoadMore={this.handleLoadMore} disabled={this.state.loading} />
          )
        }
      </div>
    )
  }
}

export default App;
