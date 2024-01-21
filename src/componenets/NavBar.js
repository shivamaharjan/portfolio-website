import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { useMediaQuery } from "react-responsive";
import Hamburger from "hamburger-react";


function NavBar() {

  const [isOpen, setOpen] = useState(false);
  const isXlScreen = useMediaQuery({ query: "(min-width: 982px)" });

  return (
    <div>
      <Navbar expand="lg mb-5">
        <Container className="d-flex justify-content-between align-items-center">
          <Link to="/" className="nav-link">
            <h1>DB</h1>
          </Link>
          <div>
            {isXlScreen ? (
              <div className="d-flex gap-3">
                <Link to="/linkedIn" className="nav-link">
                  Home
                </Link>
                <Link to="/linkedIn" className="nav-link">
                  Projects
                </Link>
                <Link to="/linkedIn" className="nav-link">
                  About
                </Link>
                <Link to="/linkedIn" className="nav-link">
                  Contact
                </Link>
              </div>
            ) : (
              // Render hamburger for smaller screens
              <div className="text-color">
                <Hamburger toggled={isOpen} toggle={setOpen} size={30} />
              </div>
            )}
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
