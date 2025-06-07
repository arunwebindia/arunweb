import React, { useState } from "react";
import ImageCard from "../../../component/ImageCard";
import { projectObject } from "../../../services/project";
import MainHeading from "../../../component/typography/MainHeading";
import SubHeading from "../../../component/typography/SubHeading";
export default function Project() {
  const [projectView, setProjectView] = useState({
      status: false,
      name: "",
      component: null,
    });
  return (
    <div className="project">
      <div className="my-container pt-5">
        <div className="mb-4">
          <SubHeading text={"PROJECT"}/>
          <MainHeading text={"My Creativity"}/>
        </div>
        <div className="card-section pb-5">
          <div className="row gy-3">
            {projectObject.reverse().slice(0, 3)?.map((element) => {
              return (
                <div className="col-md-4" key={element?.name}>
                  <button
                    className="border-0 outline-0 pointer w-100"
                    onClick={() =>
                      setProjectView({
                        status: true,
                        name: element?.name,
                        component: element?.component,
                      })
                    }
                  >
                    <ImageCard
                      name={element?.name}
                      description={element?.description}
                      image={element?.icon}
                    />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        <hr />
      </div>
      {projectView.status && projectView.component && (
        <div
          className="modal-warpper"
          onClick={() =>
            setProjectView((prev) => (prev = { ...prev, status: false }))
          }
        >
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="modal-box">
              {projectView.component && <projectView.component />}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
