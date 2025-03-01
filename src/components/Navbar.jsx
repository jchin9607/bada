import React from "react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

const Navbar = () => {
  const [selected, setSelected] = useState("Home");
  const location = useLocation().pathname;
  const navigate = useNavigate();

  useEffect(() => {
    if (location === "/") {
      setSelected("Home");
    }
    if (location === "/sessions") {
      setSelected("About");
    }
    if (location === "/contact") {
      setSelected("Contact");
    }
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div className="h-[50px] flex justify-between items-center px-[5%] w-full fixed bg-white z-5">
      <div
        className="flex h-full items-center cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img src="logo.png" alt="logo" className="p-2 h-full object-cover" />
        <h1>BADA</h1>
      </div>

      <ul className="flex gap-4">
        {selected === "Home" ? (
          <li className="underline cursor-pointer">Home</li>
        ) : (
          <li onClick={() => navigate("/")} className="cursor-pointer">
            Home
          </li>
        )}

        {selected === "About" ? (
          <li className="underline cursor-pointer">Sessions</li>
        ) : (
          <li onClick={() => navigate("/sessions")} className="cursor-pointer">
            Sessions
          </li>
        )}
        {selected === "Contact" ? (
          <li className="underline cursor-pointer">Coaches</li>
        ) : (
          <li onClick={() => navigate("/contact")} className="cursor-pointer">
            Coaches
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
