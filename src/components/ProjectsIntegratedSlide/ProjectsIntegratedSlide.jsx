import React from "react";
import IntegratedProjects from "../IntegratedProjects/IntegratedProjects";
import style from "./ProjectsIntegratedSlide.module.css";

function ProjectsIntegratedSlide({ isActive }) {
  return (
    <div className={style.container}>
      <h2 className={style.title}>
        Projects integrated into the Arrakis AI Ecosystem
      </h2>
      <IntegratedProjects isActive={isActive}></IntegratedProjects>
    </div>
  );
}

export default ProjectsIntegratedSlide;
