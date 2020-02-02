/* eslint-disable import/extensions */

import React from 'react';
import axios from 'axios';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

import AdList from './ads/AdList.jsx';
import PaymentCalculator from './paymentCalculator/PaymentCalculator.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    const { listingId } = this.props;
    this.state = {
      listingId,
      price: null,
      downPayment: null,
      rate: null,
      ads: [],
      listing: {},
    };
    this.updatePrice = this.updatePrice.bind(this);
  }

  componentDidMount() {
    const { listingId } = this.state;
    const url = `/listing${listingId}`;
    axios.get(url)
      .then((response) => {
        console.log(response.data);
        const newAds = response.data.ads;
        const newListing = response.data.listing;
        const { price } = newListing;
        const downPayment = price * 0.2;
        this.setState({
          ads: newAds,
          listing: newListing,
          price,
          downPayment,
        });
      });
  }

  updatePrice(price, downPayment) {
    this.setState({
      price,
      downPayment,
    });
    // console.log('updated price', price, downPayment);
  }


  render() {
    const {
      listing, ads, price, downPayment,
    } = this.state;
    // console.log(price, downPayment);
    return (
      <div>
        <h1>App</h1>
        <PaymentCalculator
          price={price}
          downPayment={downPayment}
          updatePrice={this.updatePrice}
        />
        <AdList
          ads={ads}
          listing={listing}
        />
      </div>
    );
  }
}

App.propTypes = {
  listingId: PropTypes.number.isRequired,
};


export default App;
