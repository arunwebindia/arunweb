import React from "react";
import Card from "./Card";
import SubHeading from "../../../component/typography/SubHeading";
import MainHeading from "../../../component/typography/MainHeading";
import knit from '../../../assets/image/knit.jpeg'
import chetu from '../../../assets/image/chetu.jpg'
import skil from '../../../assets/image/skill.jpg'
export default function Progress() {
  return (
    <div className="banner">
      <div className="my-container pb-5">
        <div className="mb-4">
          <SubHeading text={"PROJECT"} />
          <MainHeading text={"My Creativity"} />
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <Card img={knit} title={"Project Name: Pashu-Yug"} desciption={"HTML,CSS,React,Node and mongoDB"}/>
          </div>
          <div className="col-md-6 col-lg-4">
            <Card img={skil} title={"Project Name: Pashu-Yug"} desciption={"HTML,CSS,React,Node and mongoDB"}/>
          </div>
          <div className="col-md-6 col-lg-4">
            <Card img={chetu} title={"Project Name: Pashu-Yug"} desciption={"HTML,CSS,React,Node and mongoDB"}/>
          </div>
        </div>
      </div>
    </div>
  );
}
