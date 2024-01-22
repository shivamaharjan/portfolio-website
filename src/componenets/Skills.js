import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Skills() {
  return (
    <Container className="mt-5 mb-5">
      <Row className="mt-5 mb-5">
        <Col md={3} xs={12}>
          <div className="d-md-flex justify-content-md-center align-items-md-center mb-5">
            <h1>My Skills</h1>
          </div>
        </Col>
        <Col md={9} xs={12}
        className='pe-5'>
          <Row className="flex-column">
            <Col>
              <h5>Technical Skills</h5>
              <ul className="list-unstyled">
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ul>
            </Col>
            <Col className="d-md-flex flex-md-column justify-content-md-end align-items-md-end">
              
              <ul className="list-unstyled">
                <h5>Soft Skills</h5>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Skills