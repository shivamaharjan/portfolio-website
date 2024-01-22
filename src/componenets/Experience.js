import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';

function Experience() {
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
    color: "white",
  };
    const [showLists, setShowLists] = useState(false);

    const toggleLists = () => {
      setShowLists(!showLists);
    };
  return (
    <Container>
      <Row className="mt-5 mb-5">
        <Col md={3} xs={12}>
          <div className="d-md-flex justify-content-md-center align-items-md-center mb-5">
            <h1>Experience</h1>
          </div>
        </Col>
        <Col md={9} xs={12}>
          <Row className="flex-column">
            <Col className="mb-5">
              <h5>Southern Cross Club - Manager</h5>
              <h6>10 jul 2018 - present</h6>
              <ul
                className={`list-unstyled d-none d-md-block ${
                  showLists ? "d-md-block" : ""
                }`}
              >
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ul>
              {showLists && (
                <ul className="list-unstyled d-md-block">
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                </ul>
              )}
              <Button
                style={buttonStyle}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor =
                    buttonHoverStyle.backgroundColor;
                  e.target.style.borderColor = buttonHoverStyle.borderColor;
                  e.target.style.color = buttonHoverStyle.color;
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = buttonStyle.backgroundColor;
                  e.target.style.borderColor = buttonStyle.borderColor;
                  e.target.style.color = "black";
                }}
                className={`d-md-none ${showLists ? "d-md-block" : ""}`}
                onClick={toggleLists}
              >
                {showLists ? "Hide Details" : "Show Details"}
              </Button>
            </Col>

            <Col className="d-md-flex justify-content-md-center align-items-md-center flex-md-column mb-5">
              <h5>Southern Cross Club - Manager</h5>
              <h6>10 jul 2018 - present</h6>
              <ul
                className={`list-unstyled d-none d-md-block ${
                  showLists ? "d-md-block" : ""
                }`}
              >
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ul>
              {showLists && (
                <ul className="list-unstyled d-md-block">
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                </ul>
              )}
              <Button
                style={buttonStyle}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor =
                    buttonHoverStyle.backgroundColor;
                  e.target.style.borderColor = buttonHoverStyle.borderColor;
                  e.target.style.color = buttonHoverStyle.color;
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = buttonStyle.backgroundColor;
                  e.target.style.borderColor = buttonStyle.borderColor;
                  e.target.style.color = "black";
                }}
                className={`d-md-none ${showLists ? "d-md-block" : ""}`}
                onClick={toggleLists}
              >
                {showLists ? "Hide Details" : "Show Details"}
              </Button>
            </Col>
            <Col className="d-md-flex justify-content-md-end align-items-md-end flex-md-column">
              <h5>Southern Cross Club - Manager</h5>
              <h6>10 jul 2018 - present</h6>
              <ul
                className={`list-unstyled d-none d-md-block ${
                  showLists ? "d-md-block" : ""
                }`}
              >
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ul>
              {showLists && (
                <ul className="list-unstyled d-md-block">
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                </ul>
              )}
              <Button
                style={buttonStyle}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor =
                    buttonHoverStyle.backgroundColor;
                  e.target.style.borderColor = buttonHoverStyle.borderColor;
                  e.target.style.color = buttonHoverStyle.color;
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = buttonStyle.backgroundColor;
                  e.target.style.borderColor = buttonStyle.borderColor;
                  e.target.style.color = "black";
                }}
                className={`d-md-none ${showLists ? "d-md-block" : ""}`}
                onClick={toggleLists}
              >
                {showLists ? "Hide Details" : "Show Details"}
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Experience
