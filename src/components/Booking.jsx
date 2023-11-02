import "./Booking.css";
import boyz from "../assets/images/boyz.jpg";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { BsSpotify } from "react-icons/bs";

const Booking = () => {
  return (
    <div className="container">
      <img src={boyz} alt="image"></img>
      <div className="li">
        <a href="mailto:abcs@gmail.com">Book Now</a>
      </div>
      <div className="contact">
        <h1>Contact Us</h1>
        <div className="icons">
          <a href="">
            <BsInstagram className="instagram" />
          </a>
          <a href="">
            <BsYoutube className="youtube" />
          </a>
          <a href="">
            <RiTwitterXFill className="twitter" />
          </a>
          <a href="">
            <BsSpotify className="spotify" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Booking;
