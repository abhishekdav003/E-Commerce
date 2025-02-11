import React from "react";
import { TiHeartFullOutline } from "react-icons/ti";

const Footer = () => {
  return (
    <footer className="bg-slate-200">
      <div className="container mx-auto p-4 text-center">
        <p>
          Made with <TiHeartFullOutline className="inline text-blue-500" /> in
          India
        </p>
      </div>
    </footer>
  );
};

export default Footer;
