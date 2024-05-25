import { Col, Form, Image, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import SingleComment from "./SingleComment";
import { useState } from "react";
import { addCommentAction } from "../redux/actions";

const Comments = ({ post }) => {
  const [comment, setComment] = useState("");
  // const [ rate, setRate] = useState(1)
  const rate = 1;
  const userData = useSelector((state) => state.user.user_info);
  const loggedIn = useSelector((state) => state.login.isLogged);
  const comments = useSelector((state) => state.comments.specific_post_comments);

  const dispatch = useDispatch();

  const commentObj = {
    elementId: post._id,
    comment: comment,
    rate: rate,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCommentAction(commentObj));
  };
  return (
    <>
      <Row className="p-0 mt-3">
        {loggedIn && (
          <>
            <Col xs={2} className="p-0">
              <Image src={userData.image} alt="" className="pointer comment-propic" />
            </Col>
            <Col xs={10} className="p-0">
              <Form onSubmit={handleSubmit}>
                <Form.Control
                  required
                  type="text"
                  placeholder="Add a comment..."
                  defaultValue={""}
                  onChange={(e) => setComment(e.target.value)}
                />
              </Form>
            </Col>
          </>
        )}
      </Row>

      {comments.length > 0 &&
        comments.map((comment) => (
          <SingleComment key={comment._id} post={post} comment={comment.comment} user={comment.author} />
        ))}
    </>
  );
};

export default Comments;
