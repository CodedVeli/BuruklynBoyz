import "./Booking.css";
import boyz from "../assets/images/boyz.jpg";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { BsSpotify } from "react-icons/bs";

const Booking = () => {
  return (
    <div className="contain">
      <img className=" lg:h-[650px] lg:w-[900px] rounded-2xl h-96" src={boyz} alt="image"></img>
      <div className="li">
        <a href="mailto:abcs@gmail.com">Book Now</a>
      </div>
      <div className="contact">
        <h1 className=" lg:text-4xl text-2xl text-blue-700 text-center">Contact Us</h1>
        <div className="icons">
          <a href="instagram.com">
            <BsInstagram className="instagram" />
          </a>
          <a href="youtube.com">
            <BsYoutube className="youtube" />
          </a>
          <a href="">
            <RiTwitterXFill className="twitter" />
          </a>
          <a href="spotify.com">
            <BsSpotify className="spotify" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Booking;
