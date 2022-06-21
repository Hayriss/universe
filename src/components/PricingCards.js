import React from "react";
import { Link } from "react-router-dom";

function PricingCards() {
  return (
    <div className="pricing w-full py-24 px-4 bg-black">
      <div className="card-container max-w-[1140px] mx-auto grid gap-10 md:grid-cols-3">
        <div className="card">
          <h3>- Basic -</h3>
          <span className="bar"></span>
          <p className="btc">1 BTC</p>
          <p>- 3 Days -</p>
          <p>- Views -</p>
          <p>- Featured -</p>
          <p>- Private Quarters -</p>
          <Link to="/contact" className="btn">
            Book
          </Link>
        </div>
        <div className="card">
          <h3>- Suite -</h3>
          <span className="bar"></span>
          <p className="btc">1 BTC</p>
          <p>- 3 Days -</p>
          <p>- Views -</p>
          <p>- Featured -</p>
          <p>- Private Quarters -</p>
          <Link to="/contact" className="btn">
            Book
          </Link>
        </div>
        <div className="card">
          <h3>- Executive -</h3>
          <span className="bar"></span>
          <p className="btc">1 BTC</p>
          <p>- 3 Days -</p>
          <p>- Views -</p>
          <p>- Featured -</p>
          <p>- Private Quarters -</p>
          <Link to="/contact" className="btn">
            Book
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PricingCards;
