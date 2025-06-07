import React from "react";
import { NavLink } from "react-router-dom";

export default function NavItems({ element }) {
  return (
    <li class="nav-item" key={element?.name}>
      <NavLink to={element?.path} className={"nav-link"}>
        {element?.name}
      </NavLink>
    </li>
  );
}
