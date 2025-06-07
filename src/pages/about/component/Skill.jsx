import React from "react";
import SubHeading from "../../../component/typography/SubHeading";
import MainHeading from "../../../component/typography/MainHeading";
import html from "../../../assets/image/html.png"
import css from "../../../assets/image/css.png"
import js from "../../../assets/image/js.png"
import react from "../../../assets/image/react.png"
import node from "../../../assets/image/nodejs.png"
import mongodb from "../../../assets/image/mongodb.png"

export default function Skill() {
  return (
    <div>
      <div className="my-container pt-5">
        <div className="mb-4">
          <SubHeading text={"Skills"} />
          <MainHeading text={"My Skills"} />
        </div>
        <div className="row g-3">
          
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card working-card text-center">
              <div className="skill_imag_wrapper">
              <img src={html} alt="" className="skill_image"/>
              </div>
              <hr />
              <h5>HTML5</h5>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card working-card">
              <img src={css} alt="" className="skill_image"/>
              <hr />
              <h4>CSS</h4>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card working-card">
              <img src={js} alt="" className="skill_image"/>
              <hr />
              <h4>JS</h4>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card working-card">
              <img src={react} alt="" className="skill_image"/>
              <hr />
              <h4>REACT</h4>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card working-card">
              <img src={node} alt="" className="skill_image"/>
              <hr />
              <h4>Node</h4>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card working-card">
              <img src={mongodb} alt="" className="skill_image"/>
              <hr />
              <h4>Mongodb</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
