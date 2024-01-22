import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import img1 from "../assests/dhiren.jpeg"
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

function Hero() {
    const buttonStyle = {
      fontSize: "10px",
      backgroundColor: "#ecf0f1",
      border: "1px solid ",
      transition: "background-color 0.3s, border-color 0.3s",
      borderColor: "white",
      color: "black",
    };

    const buttonHoverStyle = {
      backgroundColor: "#2ecc71 ",
      borderColor: "white",
      color:"white"
    };
       const iconStyle = {
         transition: "color 0.3s",
       };

       const iconHoverStyle = {
         transform: "scale(1.2)",
         color: "#2ecc71",
       };
  return (
    <div className="mt-5 mb-5">
      <Container>
        <div className="d-flex justify-content-center align-items-center">
          <Image
            src={img1}
            alt="Hero Image"
            fluid
            style={{
              borderRadius: "50%",
              maxHeight: "5rem",
              marginRight: "2rem",
            }}
          />

          <div>
            <h1>Dhiren Bhatta</h1>
            <div className="d-flex">
              <p>IT Graduate</p>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center mb-5 mt-3">
          <Button
            style={buttonStyle}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
              e.target.style.borderColor = buttonHoverStyle.borderColor;
              e.target.style.color = buttonHoverStyle.color;
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = buttonStyle.backgroundColor;
              e.target.style.borderColor = buttonStyle.borderColor;
              e.target.style.color = "black";
            }}
          >
            Download Resume
          </Button>
          <div className="d-flex ms-2">
            <Link to="/linkedIn" className="nav-link">
              <FaLinkedin
                size="1.5rem"
                style={iconStyle}
                onMouseOver={(e) => {
                  e.target.style.color = iconHoverStyle.color;
                }}
                onMouseOut={(e) => {
                  e.target.style.color = "black";
                }}
              />
            </Link>
            <Link to="/linkedIn" className="nav-link ms-2">
              <AiFillInstagram
                size="1.5rem"
                style={iconStyle}
                onMouseOver={(e) => {
                  e.target.style.color = iconHoverStyle.color;
                }}
                onMouseOut={(e) => {
                  e.target.style.color = "black";
                }}
              />
            </Link>
            <Link to="/linkedIn" className="nav-link ms-2">
              <MdEmail
                size="1.5rem"
                style={iconStyle}
                onMouseOver={(e) => {
                  e.target.style.color = iconHoverStyle.color;
                }}
                onMouseOut={(e) => {
                  e.target.style.color = "black";
                }}
              />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Hero;
