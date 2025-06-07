import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../../../assets/style/footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
export default function Index() {
  return (
    <>
      <div className="footer px-3 py-5 bg-dark box-center">
        <div className="text-white">
          <h3 className="text-center  f-heading">arunweb.online</h3>
          
          <div className="d-flex gap-2 link box-center">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/project">Project</NavLink>
          </div>
          <div className="d-flex link gap-2 box-center py-3">
            <Link to="/home">
              <FaFacebookF />
            </Link>
            <Link to="/home">
              <FaGithub />
            </Link>
            <Link to="/home">
              <FaWhatsapp />
            </Link>
            <Link to="/home">
              <FaLinkedinIn />
            </Link>
          </div>
          <h6>This is created for only learning purpose and taken UI reference from various websites.</h6>

            <div className="pt-5 text-center">
              Copyright ©2024 Arunweb All Rights Reserved
            </div>
        </div>
      </div>
    </>
  );
}
