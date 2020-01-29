/* eslint-disable import/extensions */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
import AdList from './ads/AdList.jsx';
import propTypes from 'prop-types';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listingId: this.props.listingId,
      ads: [],
      listing: {},
    };
  }

  componentDidMount() {
    console.log(this.state.listingId);
    const url = `/listing${this.state.listingId}`;
    axios.get(url)
      .then((response) => {
        console.log(response.data);
        const newAds = response.data.ads;
        const newListing = response.data.listing;
        this.setState({
          ads: newAds,
          listing: newListing,
        });
      });
  }

  render() {
    return (
      <div>
        <h1>App!</h1>
        <AdList ads={this.state.ads} />
      </div>
    );
  }
}

export default App;
