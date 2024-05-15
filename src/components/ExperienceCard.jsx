import { Card } from "react-bootstrap";
import { fetchExperiencesAction, removeExperienceAction } from "../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { setModalType, showModal } from "../redux/actions";
import ExpPutModal from "./ExpPutModal";
// import trash from "../assets/icons/trash.svg";

const ExperienceCard = ({ experience }) => {
  const id = useSelector((state) => state.user.other_user_info._id);
  const loggedIn = useSelector((state) => state.login.isLogged);
  const dispatch = useDispatch();
  const modalType = useSelector((state) => state.modal.modalType);
  console.log("userid and expid", id, experience._id);

  const handleShowExpPostModal = () => {
    dispatch(setModalType("put"));
    dispatch(showModal());
  };

  const dateConversion = (startingDate) => {
    if (startingDate) {
      const rawdate = new Date(startingDate);
      const year = rawdate.getUTCFullYear();
      const month = rawdate.getUTCMonth();
      console.log("anno e mese", year, month);
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      const actualMonth = months[month];
      const actualDate = `${actualMonth} ${year}`;
      console.log(actualDate);
      return actualDate;
    }
  };

  const handleRemove = () => {
    dispatch(removeExperienceAction(id, experience._id));
    dispatch(fetchExperiencesAction(id));
  };

  return (
    <div className="experience-card-inner-container">
      <Card className="card-container experience-card my-auto">
        {modalType === "put" && <ExpPutModal expData={experience} />}
        <div className="single-exp d-flex">
          <Card.Img src={experience.image} className="experience-image" />
          <div className="d-flex flex-column flex-grow-1">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <Card.Title className="experience-name">{experience.role}</Card.Title>
                  <Card.Text className="experience-info">{experience.company}</Card.Text>
                  <Card.Text className="experience-period">
                    {dateConversion(experience.startDate)}
                    {experience.endDate && " - "}
                    {dateConversion(experience.endDate)}
                  </Card.Text>
                  <Card.Text className="experience-location">{experience.area}</Card.Text>
                </div>
                {loggedIn && (
                  <div>
                    {/* <button onClick={handleRemove} className="btn btn-danger bg-transparent border-0 p-0">
                      <Image src={trash} className="trash-icon" />
                    </button> */}
                    <i className="edit bi bi-pen experience-icon me-4" onClick={handleShowExpPostModal}></i>
                    <i className="bi bi-trash experience-icon " onClick={handleRemove}></i>
                  </div>
                )}
              </div>
            </Card.Body>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ExperienceCard;
