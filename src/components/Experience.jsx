import { Card } from "react-bootstrap";
import ExperienceCard from "./ExperienceCard";
import { useSelector } from "react-redux";
import rightarrow from "../assets/icons/arrowright.svg";
import { Image } from "react-bootstrap";
import ExpModal from "./ExpModal";
import { useNavigate } from "react-router-dom";

const Experience = () => {
  const navigate = useNavigate();
  const userId = useSelector((state) => state.user.other_user_info._id);
  const experiencesList = useSelector((state) => state.experiences_list);

  const modalType = useSelector((state) => state.modal.modalType);

  return (
    <Card className="section-container">
      <div className="inner-section-container">
        <div className="edit-wrapper">
          <i className="edit bi bi-pen" onClick={() => navigate(`/experience/${userId}`)}></i>
          {modalType === "exp" && <ExpModal />}
        </div>
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
