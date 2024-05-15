import { Card } from "react-bootstrap";
import ExperienceCard from "./ExperienceCard";
import rightarrow from "../assets/icons/arrowright.svg";
import { Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Experience = ({ experiencesList }) => {
  console.log("experiencestest2", experiencesList);
  const navigate = useNavigate();
  const userId = useSelector((state) => state.user.user_info._id);
  return (
    <Card className="section-container">
      <div className="inner-section-container">
        {/* <div className="edit-wrapper">
          <i className="edit bi bi-pen"></i>
        </div> */}
        <p className=" section-title">Experience</p>
        {experiencesList.experiences_list.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
      <h6
        onClick={() => navigate(`/experience/${userId}`)}
        className="show-all-projects text-center border-top m-0 p-2"
      >
        Show all experiences <Image src={rightarrow} />
      </h6>
    </Card>
  );
};

export default Experience;
