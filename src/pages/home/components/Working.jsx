import { div } from "@mui/joy";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import SubHeading from "../../../component/typography/SubHeading";
import MainHeading from "../../../component/typography/MainHeading";
import PrimaryBTN from "../../../component/buttons/PrimaryBTN";

export default function Working() {
  return (
    <div className="workings">
      <div className="my-container pt-5">
        <div className="row gy-3">
          <div className="col-md-6">
            <Box sx={{ width: "100%" }}>
              <div className="mb-4">
                        <SubHeading text={"Work"} />
                        <MainHeading text={"My Working"} />
                      </div>
             
              <div className="pb-3">
                Chetu is a US-based software development company providing
                businesses worldwide with tailored software solutions from
                industry specialized developers.
              </div>
              <div>
                <span className="label">My Role</span> :{" "}
                <span className="fw-semibold">React developer</span>
              </div>
              <div>
                <span className="label">Project</span> :{" "}
                <span className="fw-semibold">4+</span>
              </div>
              <div>
                <span className="label">Experience</span> :{" "}
                <span className="fw-semibold">1+ year</span>
              </div>
              <PrimaryBTN>About company</PrimaryBTN>
              {/* <button className="about-btn">About company</button> */}
            </Box>
          </div>
          <div className="col-md-6">
            <div className="card working-card">
              <img
                src="https://www.chetu.com/img/about-us-img/feature-content/history.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}
