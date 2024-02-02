import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>Bahrimohamedali6@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/bahri_mohamed_ali/"><Insta color="white" size={"3rem"} /></a> 
          <a href="https://www.facebook.com/profile.php?id=100004809242007"><Facebook color="white" size={"3rem"} /></a> 
          <a href="https://github.com/bahriovich"><Gitub color="white" size={"3rem"} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
