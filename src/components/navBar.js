import React from "react"
import { Link } from "gatsby"

import logo from "../images/logo-icon.png"

import {
  Navbar, Nav,
  //Form, FormControl, Button 
} from "react-bootstrap"

const CustomNavbar = ({ pageInfo }) => {

  return (
    <>
      <Navbar variant="dark" expand="lg" id="site-navbar" style={{ backgroundColor: "rgb(150, 0, 0)" }}>
        {/* <Container> */}
        <Link to="/" className="link-no-style">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          <Navbar.Brand as="span">AIKKMS</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" activeKey={pageInfo && pageInfo.pageName}>
            <Link to="/about" className="link-no-style">
              <Nav.Link as="span" eventKey="about">
                About
              </Nav.Link>
            </Link>
          </Nav>
          {/* <Nav className="ml-auto">
            <Form inline onSubmit={e => e.preventDefault()}>
              <Form.Group>
                <FormControl
                  type="text"
                  placeholder="Fake Search"
                  className="mr-2"
                />
              </Form.Group>
              <Button>Fake Button</Button>
            </Form>
          </Nav> */}
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    </>
  )
}

export default CustomNavbar
