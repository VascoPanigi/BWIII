import { Card } from "react-bootstrap";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <Card className="section-container">
      <div className="inner-section-container">
        <p className=" section-title">Experience</p>
        <ExperienceCard />
      </div>
    </Card>
  );
};

export default Experience;
