import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { GET_SPECIFIC_PROFILE, fetchExperiencesAction, fetchProfileAction } from "../redux/actions";

const SuggestionCard = ({ singleUser }) => {
  const dispatch = useDispatch();
  // console.log(singleUser._id);

  const handleClick = () => {
    dispatch({ type: GET_SPECIFIC_PROFILE, payload: singleUser });
    dispatch(fetchExperiencesAction(singleUser._id));
    dispatch(fetchProfileAction(singleUser._id));
  };

  return (
    <Card className="suggestion-card-container my-auto">
      <div className="d-flex align-items-start">
        <Card.Img src={singleUser.image} className="suggestion-profile-image" />
        <div className="d-flex flex-column">
          <Card.Body>
            <Card.Title className="suggestion-name" onClick={handleClick}>
              {singleUser.name} {singleUser.surname}
              <span className="last-seen-suggestion"> • 3rd</span>
            </Card.Title>
            <Card.Text className="suggestion-occupation ">{singleUser.title}</Card.Text>
            <Button className="suggestion-button" variant="outline-dark">
              <Link to={`/user/${singleUser._id}`} onClick={handleClick}>
                View profile
              </Link>
            </Button>
          </Card.Body>
        </div>
      </div>
    </Card>
  );
};

export default SuggestionCard;
