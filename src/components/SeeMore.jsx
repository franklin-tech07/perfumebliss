import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const SeeMore = () => {
  return (
    <section id="collection">
      {/* preview items */}

      <Link to="/collection" className="see-more">
        See more →
      </Link>
    </section>
  );
};

export default SeeMore;
