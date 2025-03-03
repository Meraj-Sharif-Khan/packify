import React from "react";

function BlurredOverlay() {
  return (
    <div
      style={{
        position: "fixed", // To cover the entire viewport
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backdropFilter: "blur(3px)",
        WebkitBackdropFilter: "blur(3px)", // For Safari
        zIndex: -1000, // Ensure it's on top
        display: "flex", // Center content
        justifyContent: "center",
        alignItems: "center",
      }}
    ></div>
  );
}

export default BlurredOverlay;
