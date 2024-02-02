import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Dundil from "../../img/dundilldottn.png";
import Tigre from "../../img/tigre_login_form.png"
import Travel from "../../img/travel.png"
import Dashboard from "../../img/dashboard.png"
import Meals from "../../img/react_meals.png"
import Ecomarc from "../../img/ecomark.png";
import Gaming from "../../img/gamingg.png";
import Dundill from "../../img/dundilldotcom.png";
import ARTTRIPP from "../../img/Ar-tripp.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://dev.ar-tripp.com/"> <img src={ARTTRIPP} alt="" /> </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://www.dundill.tn/"> <img src={Dundil} alt="" /> </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://www.dundill.com/"> <img src={Dundill} alt="" /> </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://bahri-gaming.netlify.app/"> <img src={Gaming} alt="" /> </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="http://www.ecomarc.tn/"> <img src={Ecomarc} alt="" /> </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://login-tiger.netlify.app/"> <img src={Tigre} alt="" /> </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://bahri-travel.netlify.app/"> <img src={Travel} alt="" /> </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://dundill-dashboard.netlify.app/"> <img src={Dashboard} alt="" /> </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://react8meals.netlify.app/"> <img src={Meals} alt="" /> </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
