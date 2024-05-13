import { Card } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import rightarrow from "../assets/icons/arrowright.svg";
import { Image } from "react-bootstrap";
const MyProjects = () => {
  return (
    <Card className="projects-container">
      <h4 className="ps-3 pt-3">Projects</h4>
      <ProjectCard />
      <ProjectCard />
      <h6 className="text-center border-top">
        Show all N projects <Image src={rightarrow} />
      </h6>
    </Card>
  );
};

export default MyProjects;
