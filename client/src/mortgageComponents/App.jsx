/* eslint-disable import/extensions */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

import AdList from './ads/AdList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listingId: this.props.listingId,
      ads: [],
      listing: {},
      today: `${new Date().getMonth() + 1}/${new Date().getDate()}`,
    };
  }

  componentDidMount() {
    console.log(this.state.listingId, this.state.today);
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
        <h1>App</h1>
        <AdList
          ads={this.state.ads}
        />
      </div>
    );
  }
}

App.propTypes = {
  listingId: PropTypes.number.isRequired,
};


export default App;
