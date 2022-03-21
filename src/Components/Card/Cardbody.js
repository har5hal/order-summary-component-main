import React from 'react';
import Link from '../Link';
import Img from '../Img';

function Cardbody({musicIllustration}) {
  return (
    <div className="card-body">
          <h1>Order Summary</h1>
          <p>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>  
          <div className="card-panel">
            <div className="d-inline">
              <Img classes={"d-inline music-icon"} imgSrc={musicIllustration} imgAlt="music-icon" />
              <div className="d-inline">
                <h6>Annual Plan</h6>
                <p>$59.99/year</p>
              </div> 
            </div>
            <Link classes={"btn-link"} btnText={"Change"} />
          </div>
          <button className="btn-main">Proceed to Payment</button>
          <Link classes={"btn-cancel"} btnText={"Cancel Order"} />
        </div> 
  )
}

export default Cardbody