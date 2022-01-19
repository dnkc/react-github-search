import React from "react";
import Spinner_gif from "./assets/spinner.gif";

const Spinner = () => {
  return (
    <div className="w-100 mt-20">
      <img src={Spinner_gif} alt="Loading..." className="text-center mx-auto" />
    </div>
  );
};

export default Spinner;
