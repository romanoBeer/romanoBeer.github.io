import React from "react";
import "../css/HeadWithSub.css";

function HeadWithSub( {Head, Sub, Id} ) {
  return (
    <div id={Id} className="about">
      <h2 className="text-center about-heading">{Head}</h2>
      <p className="text-center paragraph summary">{Sub}
      </p>
    </div>
  );
}

export default HeadWithSub;
