import React from "react";

const WhatsAppButton = ({ productName }) => {
  const phoneNumber = "23232214003";

  const message = `Hi, Is ${productName} available!`;

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <button
      className="WhatsAppButton"
      onClick={() => window.open(url, "_blank")}
      style={{
        cursor: "pointer",
      }}
    >
      Buy
    </button>
  );
};

export default WhatsAppButton;
