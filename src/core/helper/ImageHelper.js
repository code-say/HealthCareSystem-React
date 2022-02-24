import React from "react";
import { API } from "../../backend";

import image1 from "../../assets/pexels-miguel-á-padriñán-806427.jpg";
import image2 from "../../assets/pexels-negative-space-48604.jpg";
import image3 from "../../assets/pexels-pixabay-40751.jpg";
import image4 from "../../assets/pexels-pixabay-356040.jpg";

const ImageHelper = ({ product }) => {
  
  return (
    <div className="rounded border border-success p-2">
      <img
        src={image1}
        alt="photo"
        style={{ maxHeight: "100%", maxWidth: "100%" }}
        className="mb-3 rounded"
      />
      <img
        src={image2}
        alt="photo"
        style={{ maxHeight: "100%", maxWidth: "100%" }}
        className="mb-3 rounded"
      />
      <img
        src={image3}
        alt="photo"
        style={{ maxHeight: "100%", maxWidth: "100%" }}
        className="mb-3 rounded"
      />
      <img
        src={image4}
        alt="photo"
        style={{ maxHeight: "100%", maxWidth: "100%" }}
        className="mb-3 rounded"
      />
    </div>
  );
};

export default ImageHelper;
