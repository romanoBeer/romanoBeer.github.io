import React from "react";
import "../css/HeadWithSub.css";

function HeadWithSub( {Head, Sub} ) {
  return (
    <div id="about" className="about">
      <h2 className="text-center about-heading">{Head}</h2>
      <p className="text-center paragraph summary">{Sub}
      </p>
    </div>
  );
}

export default HeadWithSub;
