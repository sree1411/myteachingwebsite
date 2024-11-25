import React from "react";
import whatsapp from "../../assests/whatsapp.webp";

const WhatsApp = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
      <a
        aria-label="Chat on WhatsApp"
        href="https://wa.me/9014701189"
        style={{
          textDecoration: "none",
          color: "#25D366", // WhatsApp green color
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <img
          alt="Chat on WhatsApp"
          src={whatsapp}
          style={{ width: "50px", height: "50px" }}
        />
        <span style={{ fontSize: "16px", fontWeight: "bold" }}>
          Click here to chat on WhatsApp
        </span>
      </a>
    </div>
  );
};

export default WhatsApp;
