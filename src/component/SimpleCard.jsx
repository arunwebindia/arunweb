import React from "react";
import Icon from "./Icon";
import FaIcon from "./FaIcon";
import reactIcon from '../assets/logo/react_icon.png'

export default function SimpleCard({icon,size=28,title='title',descript="desc"}) {
  return (
    <>
      <div class="card border-0 " style={{boxShadow: "rgba(255, 255, 255, 0.829) -10px -10px 15px, rgba(70, 70, 70, 0.418) 5px 5px 10px",background:"#eaeaea59"}}>
        <div class="card-body p-4">
        {/* <FaIcon name={icon} size={size}></FaIcon> */}
        <img src={icon} alt="service logo" width={'50'} className="h-auto"/>
          <h5 class="card-title my-3 fw-semibold fs-5">{title}</h5>
          <p class="card-text">
            {descript}
          </p>
        </div>
      </div>
    </>
  );
}
