import React, { useState } from "react";
import "./Nav.css";
export default function Nav() {
    const [show,handleShow]=useState(false);
    useState(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100){
                handleShow(true);
            }else{
                handleShow(false);
            }
        });
        return ()=>{
            window.removeEventListener("scroll");
        };
    },[]);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix logo"
      />
      <img
        src="https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png"
        alt="User"
        className="nav_avatar"
      />
    </div>
  );
}
