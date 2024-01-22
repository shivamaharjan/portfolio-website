import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function About() {
  return (
    <Container>
      <Row className="mt-5 mb-5">
        <Col md={3} xs={12}>
          <div className="d-md-flex justify-content-md-center align-items-md-center mb-5">
            <h1>About Me</h1>
          </div>
        </Col>
        <Col md={9} xs={12}>
          <p>
            I am a passionate and skilled Graphic & Web Designer who crafts
            captivating visuals and user-centric digital experiences. I
            specialize in creating memorable brand identities, engaging
            websites, and impactful marketing materials. My expertise lies in
            the world of web design, where I thrive in turning complex ideas
            into intuitive and visually stunning websites. I excel in HTML, CSS,
            and JavaScript, ensuring seamless user interactions and optimal
            performance across different devices and browsers. Graphic design is
            my passion, and I take pride in producing eye-catching designs that
            tell compelling stories. From logo designs that embody a brand's
            essence to visually striking brochures and advertisements, I aim to
            create meaningful and impactful visuals that resonate with the
            target audience.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
