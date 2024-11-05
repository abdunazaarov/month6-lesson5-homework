import React from "react";
import "./Skeleton.scss";

function Skeleton() {
  return (
    <div className="skeleton-card">
        <div className="skeleton-image"></div>
        <div className="skeleton-title"></div>
        <div className="skeleton-description"></div>
        <div className="skeleton-price"></div>
    </div>

  );
}

export default Skeleton;
