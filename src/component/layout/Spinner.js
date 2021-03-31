import React, { Fragment } from "react";
import Image from "./831.gif";

const Spinner = () => {
  return (
    <Fragment>
      <img
        src={Image}
        style={{ width: "100px", margin: "auto", display: "block" }}
        alt=""
      />
    </Fragment>
  );
};

export default Spinner;
