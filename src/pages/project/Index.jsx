import React, { useState } from "react";
import ImageCard from "../../component/ImageCard";
import "../../assets/style/modal.css";
import { projectObject } from "../../services/project";
export default function Index() {
  const [projectView, setProjectView] = useState({
    status: false,
    name: "",
    component: null,
  });

  console.log(projectObject, "projectObject");
  return (
    <div>
      <div className="my-container pb-5">
        <div className="text-center py-3">
          <small>Visit my portfolio and keep your feedback</small>
          <h1 className="fw-semibold fs-2">My Projects</h1>
        </div>
        <div className="row g-3">
          {projectObject?.map((element) => {
            return (
              <div className="col-md-6 col-lg-4" key={element?.name}>
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
                  <ImageCard name={element?.name} description={element?.description} image={element?.icon}/>
                </button>
              </div>
            );
          })}
        </div>
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
