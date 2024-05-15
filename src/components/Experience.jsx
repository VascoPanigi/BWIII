import { Card } from "react-bootstrap";
import ExperienceCard from "./ExperienceCard";
import { useDispatch, useSelector } from "react-redux";
import { setModalType, showModal } from "../redux/actions";
import rightarrow from "../assets/icons/arrowright.svg";
import { Image } from "react-bootstrap";
import ExpModal from "./ExpModal";
import { useNavigate } from "react-router-dom";

const Experience = ({ experiencesList }) => {
  console.log("experiencestest2", experiencesList);
  const navigate = useNavigate();
  const userId = useSelector((state) => state.user.user_info._id);

  const dispatch = useDispatch();
  const modalType = useSelector((state) => state.modal.modalType);
  console.log(modalType);

  const handleShowExpModal = () => {
    dispatch(setModalType("exp"));
    dispatch(showModal());
  };

  return (
    <Card className="section-container">
      <div className="inner-section-container">
        <div className="edit-wrapper">
          <i className="edit bi bi-pen" onClick={handleShowExpModal}></i>
          {modalType === "exp" && <ExpModal userData={userData} />}
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
