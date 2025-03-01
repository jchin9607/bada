import React from "react";

const ListBox = ({ name, price1, price2, link, linkText, image }) => {
  return (
    <div className="w-full md:w-1/2 min-h-[500px] rounded-md border-black border-1 text-black p-4">
      <img
        src={image}
        alt="preview"
        className="w-full h-[300px] object-cover rounded-md"
      />
      <div className="flex flex-col gap-2 justify-start items-center h-[200px] p-4">
        <h1>{name}</h1>
        <h2>Prices</h2>
        <ul className="flex flex-col gap-2 list-disc">
          <li>${price1}</li>

          {price2 !== "" && <li>${price2}</li>}
        </ul>
        <a href={link} target="_blank" className="underline text-blue-300">
          {linkText}
        </a>
      </div>
    </div>
  );
};

export default ListBox;
