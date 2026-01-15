import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Return = () => {
  return (
    <section id="collection">
      {/* preview items */}

      <Link to="/" className="back">
        Back →
      </Link>
    </section>
  );
};

export default Return;
