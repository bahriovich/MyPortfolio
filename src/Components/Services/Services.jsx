import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
// import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import curriculum_vitae_eng_23 from './CV_bahri_mohamed_ali_eng.pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>services</span>
        <spane>
          <u>* Front-End</u>: React.js, Next.js, TailwindCss, Material-UI, Javascript, Html, CSS
          <br />
          <u>*Back-End</u>: Nest.js, Node.js, Laravel
          <br />
          <u>*Base De Données</u> : MongoDB, MySQL, Firebase
          <br />
          <u>*APIs</u> : GraphQL, Rest API
          <br />
          <u>*Design</u> : Figma, Balsamiq
          <br />
          <u>*Git, GitHub, GitLab</u> 
        </spane>
        <a href={curriculum_vitae_eng_23} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "24rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html, Css, JavaScript, React.js, Next.js, Node.js, Express, GraphQl"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Photoshop, Adobe xd"}
          />
        </motion.div>
        {/* 3rd */}
        {/* <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "18rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={
              "Lorem ispum dummy text are usually use in section where we need some random text"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div> */}
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
