import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import img1 from "../assests/dhiren.jpeg"

function Hero() {
  return (
    <div>
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
            <p>Front-End Developer</p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Hero;
