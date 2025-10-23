import React from "react";
import "../css/Menu.css";
import Button from "./Button";

function Menu() {
  return (
    <div className="menu">
      <Button Text={"About"} Link={"#about"}/>
      <Button Text={"Recent Projects"}/>
      <Button Text={"Contact"}/>
      <Button Text={"Work Experience"}/>
    </div>
  );
}

export default Menu;
