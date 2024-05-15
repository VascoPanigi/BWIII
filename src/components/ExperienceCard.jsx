import { Card, Image } from "react-bootstrap";
import { removeExperienceAction } from "../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import trash from "../assets/icons/trash.svg";

const ExperienceCard = ({ experience }) => {
  const id = useSelector((state) => state.user.other_user_info._id);
  const loggedIn = useSelector((state) => state.login.isLogged);
  const dispatch = useDispatch();
  console.log("userid and expid", id, experience._id);

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
  return (
    <div className="experience-card-inner-container">
      <Card className="card-container experience-card my-auto">
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
                  <button
                    onClick={() => dispatch(removeExperienceAction(id, experience._id))}
                    className="btn btn-danger bg-transparent border-0 p-0"
                  >
                    <Image src={trash} className="trash-icon" />
                  </button>
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
