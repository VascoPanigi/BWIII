import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const SingleComment = ({ comment, user }) => {
  const userList = useSelector((state) => state.users_list);

  console.log("userList", userList);

  console.log(userList.users_list);

  let specificUser = userList.users_list.filter((utente) => utente.username === user);
  specificUser = specificUser[0];

  console.log("specificUser", specificUser);

  console.log("cccccccccccccccccccccccccc", specificUser);
  return (
    <Row className="p-0 mt-3">
      <Col xs={2} className="comments-wrapper p-0 align-items-start">
        <img src={specificUser.image} alt="" className="pointer comment-propic" />
      </Col>
      <Col xs={10} className="p-0 align-items-start">
        <div className="d-flex flex-column comment">
          <h6>
            {specificUser.name}
            {specificUser.surname}
          </h6>
          <span>{specificUser.title}</span>
          <p>{comment}</p>
        </div>
        <div className="mb-1">
          <small>Like</small> | <small>Reply</small>
        </div>
      </Col>
    </Row>
  );
};

export default SingleComment;
