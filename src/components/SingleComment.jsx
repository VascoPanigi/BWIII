import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const SingleComment = ({ post, comment }) => {
  return (
    <Row className="p-0 mt-3">
      <Col xs={2} className="comments-wrapper p-0 align-items-start">
        <img src={post.user.image} alt="" className="pointer comment-propic" />
      </Col>
      <Col xs={10} className="p-0 align-items-start">
        <div className="d-flex flex-column comment">
          <h6>
            {post.user.name}
            {post.user.surname}
          </h6>
          <span>{post.user.title}</span>
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
