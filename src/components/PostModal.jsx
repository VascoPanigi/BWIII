import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { hideModal, postComment } from "../redux/actions";
import { Form, Image } from "react-bootstrap";
import { useState } from "react";

const PostModal = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.modal.showModal);
  const handleClose = () => dispatch(hideModal());

  const userData = useSelector((state) => state.user);
  const userInfo = userData.user_info;

  const [postText, setPostText] = useState("");

  const handleInputChange = (event) => {
    setPostText(event.target.value);
  };

  const postObjToSubmit = {
    text: postText,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postComment(postObjToSubmit));
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} className="post-modal">
        <Modal.Header closeButton>
          <div className="d-flex align-items-center gap-2 flex-wrapper">
            <Image src={userInfo.image} />
            <div className="d-flex flex-column">
              <h6>
                {userInfo.name} {userInfo.surname}
              </h6>
              <p>Post to anyone</p>
            </div>
          </div>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group>
              <Form.Control
                as="textarea"
                rows={4}
                className="no-border"
                placeholder="What do you want to talk about?"
                value={postText}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" onClick={postText ? handleClose : null} className={!postText ? "inactive" : "active"}>
              Post
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default PostModal;
