import React, { Component } from 'react';
import {Helmet} from "react-helmet";




class Home extends Component {
  render () {
    return(  
      <div>
        <Helmet>
          <meta name="description" content="Frieghthub Homepage"/>
          <title>Frieghthub - Home </title>
        </Helmet>
        <div>This is Home page</div>
      </div>
    );
  }
}


export default Home;
