import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <Navbar bg="light" variant="light" className="mb-5">
      <Link to={`/`}>
        <h1 className="heading">FakeShop</h1>
      </Link>
    </Navbar>
  );
};

export default Header;
