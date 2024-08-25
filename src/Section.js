import React from "react";
import "./Section.css";
function Section({ title, date, img }) {
  return (
    <div className="sc2_content_item">
      <img className="img_img" src={img} alt="aa" />
      <div className="img_content">
        <h2>{title}</h2>
        {date}
      </div>
    </div>
  );
}

export default Section;
