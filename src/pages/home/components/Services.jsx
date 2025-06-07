import React from "react";
import SimpleCard from "../../../component/SimpleCard";
import UIUX from "../../../assets/logo/uiux_icon.png";
import react from "../../../assets/logo/react_icon.png";
import back from "../../../assets/logo/backend_icons.png";
import SubHeading from "../../../component/typography/SubHeading";
import MainHeading from "../../../component/typography/MainHeading";
export default function Services() {
  return (
    <div className="service">
      <div className="my-container pt-5">
        <div className="mb-4">
          <SubHeading text={"SERVICES"} />
          <MainHeading text={"MY SERVICES"} />
        </div>
        <div className="card-section pb-5">
          <div className="row gy-3">
            <div className="col-sm-4">
              <SimpleCard
                title="UI/UX"
                descript="Using adobe xd, figma."
                icon={UIUX}
              />
            </div>
            <div className="col-sm-4">
              <SimpleCard
                title="FRONTEND"
                descript="HTML, CSS, javascript, ReactJS"
                icon={react}
              />
            </div>
            <div className="col-sm-4">
              <SimpleCard
                title="BACKEND"
                descript="Node JS, mongodb"
                icon={back}
              />
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}
