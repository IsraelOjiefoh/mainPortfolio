import React from "react";
import { Link } from "react-scroll";
import './footer.scss'
const Footer = () => {
  const date = new Date
  const year = date.getFullYear()
  return (
    <div className="container-footer">
      <div className="credits">© {year} Israel Ojiefoh. All rights reserved.</div>
      <Link to="main" smooth={true} duration={500}>
        <i className="fas fa-arrow-up"></i>
      </Link>
    </div>
  );
};

export default Footer;
