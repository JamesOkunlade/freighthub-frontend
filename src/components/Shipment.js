import React from 'react';
import { Link } from 'react-router-dom';

const Shipment = (props) => (
  <div>
    <div className="row">
      <div className="col-md-7">
        <Link to="./ShipmentDetails">
          <img className="img-fluid rounded mb-3 mb-md-0" src="http://placehold.it/700x300" alt="" />
        </Link>
      </div>
      <div className="col-md-5">
        <h3>Project Two</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, odit velit cumque vero doloremque repellendus distinctio maiores rem expedita a nam vitae modi quidem similique ducimus! Velit, esse totam tempore.</p>
        <Link className="btn btn-primary" to="./ShipmentDetails">View Project</Link>
      </div>
    </div>
    <hr/>
  </div>
);

export default Shipment;
