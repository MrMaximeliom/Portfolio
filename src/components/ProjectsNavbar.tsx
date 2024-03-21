import { FunctionComponent } from "react";
import ProjectsNavbarItem from "./ProjectsNavbarItem";

const ProjectsNavbar: FunctionComponent<{
  handleFilterCategory: Function;
  active: string;

  setShowDetail: Function;
}> = (props) => {
  return (
    <div className="flex space-x-3 px-3 py-2 list-none overflow-x-auto">
      <ProjectsNavbarItem value="All" {...props} />
      <ProjectsNavbarItem value="React" {...props} />
      <ProjectsNavbarItem value="Mongo" {...props} />
      <ProjectsNavbarItem value="NodeJS" {...props} />
      <ProjectsNavbarItem value="DotNet" {...props} />
      <ProjectsNavbarItem value="Express" {...props} />
      <ProjectsNavbarItem value="Django" {...props} />
      <ProjectsNavbarItem value="NextJS" {...props} />
    </div>
  );
};
export default ProjectsNavbar;
