import CollectionPreview from "./SeeMore";
import React from "react";
import "../App.css";
import WhatsAppButton from "./WhatsappButton";
const LatestCollection = () => {
  return (
    <div className="newCollection">
      <h1>New Collection</h1>
      <div className="container">
        <div className="newC">
          <div className="cards">
            <div className="image1"></div>
            <h3>Yves Saint Laurent</h3>
            <p>900Le</p>

            <WhatsAppButton productName="Yves Saint Laurent" />
          </div>
          <div className="cards">
            <div className="image2"></div>
            <h3>Miss Dior Blooming </h3>
            <p>1,200Le</p>
            <WhatsAppButton productName="Miss Dior Blooming " />
          </div>
          <div className="cards">
            <div className="image3"></div>
            <h3>Gentlemen Only Givency</h3>
            <p>1,500Le</p>
            <WhatsAppButton productName="Gentlemen Only Givency" />
          </div>
          <div className="cards">
            <div className="image4"></div>
            <h3>Guerlain Agua Allegoria</h3>
            <p>1,000Le</p>
            <WhatsAppButton productName="Guerlain Agua Allegori" />
          </div>
        </div>

        <CollectionPreview />
      </div>
    </div>
  );
};

export default LatestCollection;
