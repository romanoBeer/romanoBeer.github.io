import React from "react";
import "../css/Menu.css";
import Button from "./Button";

function Menu() {
  return (
    <div className="menu">
      <Button Text={"About"} Link={"#about"} />
      <Button Text={"Recent Projects"} Link={"#projects"} />
      <Button Text={"Work Experience"} Link={"#experience"} />
      <Button Text={"Contact"} Link={"#contact"} />
    </div>
  );
}

export default Menu;
