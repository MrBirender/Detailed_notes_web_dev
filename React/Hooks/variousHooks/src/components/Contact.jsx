import React, { useContext } from "react";
import { AppContext } from "../context/store";

const Contact = () => {
    const {phone} = useContext(AppContext);
  return (
    <div className="flex gap-10">
      <h2>Contact</h2>
      <p>Phone: {phone}</p>
    </div>
  );
};

export default Contact;
