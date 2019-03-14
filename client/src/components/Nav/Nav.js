import React from "react";
import {Row, Col, Navbar } from 'reactstrap';
import "./Nav.css"

const Nav = () => (
  // <div>
  //     <Row>
  //     <Col md="9">
  //       <Navbar className="blue">
  //       <a className="navbar-brand" href="/">
  //         Volunteer Manager
  //       </a>
  //       </Navbar>
  //     </Col>
  //     {/* <Col md="1">
  //       <Navbar className="white"/>
  //     </Col> */}
  //     <Col md="3">
  //       <Navbar className="red"/>
  //     </Col>

  //   </Row>
  // </div>
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <a className="navbar-brand" href="/">
      Volunteer Manager
    </a>
  </nav>
);

export default Nav;
