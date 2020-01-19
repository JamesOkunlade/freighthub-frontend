import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import '../styles/Home.css';

class Home extends Component {
  render () {
    return(
      <div>
        <Helmet>
          <meta name="description" content="Frieghthub Homepage"/>
          <title>Frieghthub - Home </title>
        </Helmet>
        <div className="home">
        <Header />

          <div className="cap">
            <h1>FreightHub – Europe's first digital freight forwarder</h1>

            <Link to="./shipments"><button type="button" className="btn">View all shipments</button></Link>
          </div>
        </div>
      </div>
    );
  }
}


export default Home;
