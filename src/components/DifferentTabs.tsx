import React from "react";
import CustomButton from "./button/CustomButton";
import "./DifferentTabs.css";

function DifferentTabs() {
  return (
    <div className="buttons-container">
      <CustomButton text="First Tab" url="/firstpage" />
      <CustomButton text="Second Tab" url="/secondpage" />
    </div>
  );
}

export default DifferentTabs;
