import React from "react";
import rocketIcon from "../../assets/img/rocket.svg";
import "animate.css";
const Loader = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "#a66cff",
      }}
    >
      <img
        className={"animate__animated animate__backOutUp"}
        src={rocketIcon}
        height="150px"
      />
    </div>
  );
};
export default Loader;
