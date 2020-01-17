import React, { Component } from 'react';
import {Helmet} from "react-helmet";




class Shipment extends Component {
  render () {
    return (
      <div>
        <Helmet>
          <meta name="description" content="Shipment details page"/>
          <title>Shipment | Frieghthub </title>
        </Helmet>
        <div>This is Shipment page</div>
      </div>
    );
  }
}


export default Shipment;
