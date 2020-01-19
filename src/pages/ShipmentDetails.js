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
        <h2>This is Shipment details page</h2>

        <div className="container">
          <h3 className="my-4">Page Heading
            <small>Secondary Text</small>
          </h3>

          <div className="row">

            <div className="col-md-8">
              <img className="img-fluid" src="http://placehold.it/750x500" alt=""/>
            </div>

            <div className="col-md-4">
              <h3 className="my-3">Project Description</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim.</p>
              <h3 className="my-3">Project Details</h3>
              <ul>
                <li>Lorem Ipsum</li>
                <li>Dolor Sit Amet</li>
                <li>Consectetur</li>
                <li>Adipiscing Elit</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    );
  }
}


export default ShipmentDetails;
