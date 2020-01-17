import React, { Component } from 'react';
import {Helmet} from "react-helmet";




class Shipments extends Component {
  render () {
    return (
      <div>
        <Helmet>
          <meta name="description" content="Shipments listing page"/>
          <title>Shipments | Frieghthub </title>
        </Helmet>
        <div>This is Shipments page</div>
      </div>
    );
  }
}


export default Shipments;
