import CollectionPreview from "./SeeMore";
import React from "react";
import "../App.css";
const LatestCollection = () => {
  return (
    <div className="newCollection">
      <h1>New Collection</h1>
      <div className="container">
        <div className="newC">
          <div className="cards">
            <div className="image1"></div>
            <h3>Perfume Name</h3>
            <p>0Le</p>
            <a href="">
              <button>Order</button>
            </a>
          </div>
          <div className="cards">
            <div className="image2"></div>
            <h3>Perfume Name</h3>
            <p>0Le</p>
            <a href="">
              <button>Order</button>
            </a>
          </div>
          <div className="cards">
            <div className="image3"></div>
            <h3>Perfume Name</h3>
            <p>0Le</p>
            <a href="">
              <button>Order</button>
            </a>
          </div>
          <div className="cards">
            <div className="image4"></div>
            <h3>Perfume Name</h3>
            <p>0Le</p>
            <a href="">
              <button>Order</button>
            </a>
          </div>
        </div>

        <CollectionPreview />
      </div>
    </div>
  );
};

export default LatestCollection;
