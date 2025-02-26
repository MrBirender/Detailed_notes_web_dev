import React, { useContext } from "react";
import App from "../App";
import { AppContext } from "../context/store";

const Footer = () => {
    const obj = useContext(AppContext);
  return (
    <div className="flex gap-10">
      <h2>Footer</h2>
      <p>Phone: {obj.phone} </p>
    </div>
  );
};

export default Footer;
