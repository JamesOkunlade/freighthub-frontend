import React from 'react';
import { Link } from 'react-router-dom';

const Shipment = ({ name, id, clicked }) => (
  <div>
    <div className="row">
      <div className="col-md-7">
        <Link to="./ShipmentDetails">
          <img className="img-fluid rounded mb-3 mb-md-0" src="http://placehold.it/700x300" alt="" />
        </Link>
      </div>
      <div className="col-md-5">
        <h3>{name}</h3>
        <p>{id}</p>
        <Link onClick={clicked} className="btn btn-primary" to="./ShipmentDetails">View shipment details</Link>
      </div>
    </div>
    <hr/>
  </div>
);

export default Shipment;
