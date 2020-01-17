import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Shipment from '../components/Shipment';

class Shipments extends Component {
  render () {
    return (
      <div>
        <Helmet>
          <meta name="description" content="Shipments listing page"/>
          <title>Shipments | Frieghthub </title>
        </Helmet>
        <div>
          <Header />
          <div className="container">

            <h1 className="my-4">Shipments
            </h1>

            <Shipment />





            <ul className="pagination justify-content-center">
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                  <span className="sr-only">Previous</span>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">1</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">2</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">3</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                  <span className="sr-only">Next</span>
                </a>
              </li>
            </ul>

        </div>

        </div>
      </div>
    );
  }
}


export default Shipments;
