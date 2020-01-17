import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import Header from '../components/Header';
import Shipment from '../components/Shipment';

class Shipments extends Component {
  state = {
    shipments: [],
    pageCount: 0
  }

  componentDidMount () {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        const shipments = response.data;
        const updatedShipments = shipments.map(shipment => {
          return {
            ...shipment,
            author: "James"
          }
        });
        this.setState({shipments: updatedShipments});
      });
  }


  handleClickPrev = () => {
    this.setState((state) => ({
      pageCount: this.state.pageCount >= 20 ? this.state.pageCount - 20 : this.state.pageCount
    }));
  }

  handleClickNext = () => {
    this.setState((state) => ({
      pageCount: this.state.pageCount < this.state.shipments.length - 20 ? this.state.pageCount + 20 : this.state.pageCount
    }));
  }

  render () {
    const shipments = this.state.shipments.slice(this.state.pageCount, this.state.pageCount + 20).map(shipment => {
        return <Shipment key={shipment.id} title={shipment.title} author={shipment.author}/>
      }
    );

    return (
      <div>
        <Helmet>
          <meta name="description" content="Shipments listing page"/>
          <title>Shipments | Frieghthub </title>
        </Helmet>
        <div>
          <Header />
          <div className="container">
            <h1 className="my-4">Shipments</h1>
            <span>showing {this.state.pageCount + 1} to {this.state.pageCount + 20}</span>

            {shipments}

            <ul className="pagination justify-content-center">
              <li className="page-item">
                <button onClick={e => this.handleClickPrev()} className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo; Prev</span>
                  <span className="sr-only">Previous</span>
                </button>
              </li>
              <li className="page-item">
                <button onClick={e => this.handleClickNext()} className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">Next &raquo;</span>
                  <span className="sr-only">Next</span>
                </button>
              </li>
            </ul>
          </div>
          <span>showing {this.state.pageCount + 1} to {this.state.pageCount + 20}</span>
        </div>
      </div>
    );
  }
}


export default Shipments;
