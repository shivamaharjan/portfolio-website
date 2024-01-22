import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

function ContactMe() {
   const buttonStyle = {
     fontSize: "14px",
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
  const inputs = [
    {
      name: "name",
      type: "text",
      placeholder: "Your Name",
    },
    {
      name: "email",
      type: "email",
      placeholder: "Your Email",
    },
    {
      name: "details",
      type: "text",
      as: "textarea",
      rows: "4",
      placeholder: "",
    },
  ];
  return (
    <Container>
      <Row className="mt-5 mb-5">
        <Col md={3} xs={12}>
          <div className="d-md-flex justify-content-md-center align-items-md-center mb-5">
            <h1>Contact Me</h1>
          </div>
        </Col>
        <Col md={9} xs={12}>
          <Row>
            <Col xs={12} lg={6} className='mb-5'>
              <Form>
                {inputs.map((input, i) => {
                  return (
                    <Form.Group className="mb-3" key={i}>
                      <Form.Control {...input} />
                    </Form.Group>
                  );
                })}
                <Button
                  style={buttonStyle}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor =
                      buttonHoverStyle.backgroundColor;
                    e.target.style.borderColor = buttonHoverStyle.borderColor;
                    e.target.style.color = buttonHoverStyle.color;
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor =
                      buttonStyle.backgroundColor;
                    e.target.style.borderColor = buttonStyle.borderColor;
                    e.target.style.color = "black";
                  }}
                >
                  Get in Touch
                </Button>
              </Form>
            </Col>
            <Col xs={12} lg={6}>Description</Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactMe