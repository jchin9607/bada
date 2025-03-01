import React from "react";

const ImageList = ({ source, alt, id }) => {
  return (
    <div className="h-screen flex justify-center items-center idImage" id={id}>
      <img
        src={source}
        alt={alt}
        className="max-w-full h-full md:h-3/4 object-cover rounded-md idImage"
        id={id}
      />
    </div>
  );
};

export default ImageList;
