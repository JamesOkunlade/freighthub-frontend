import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';

class ShipmentDetails extends Component {
  render () {
    return (
      <div>
        <Helmet>
          <meta name="description" content="Shipment details page"/>
          <title>Shipment | Frieghthub </title>
        </Helmet>
        <Header />
        <div>This is Shipment details page</div>
      </div>
    );
  }
}


export default ShipmentDetails;
