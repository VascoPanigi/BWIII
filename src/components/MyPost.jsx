import { Col, Dropdown, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteSpecificPost, fetchAllPosts, selectCard, setModalType, showModal } from "../redux/actions";
import EditPostModal from "./EditPostModal";

const MyPost = ({ post }) => {
  console.log("poststs", post); /////////
  const data = (data) => {
    const nowDate = new Date();
    const newData = new Date(data);
    const oneDay = 1000 * 60 * 60 * 24;
    const milliseconds = Math.abs(nowDate - newData);
    const day = Math.round(milliseconds / oneDay);
    const seconds = Math.round(milliseconds / 1000);
    const minutes = Math.round(seconds / 60);
    const hours = Math.round(minutes / 60);

    if (seconds < 60) {
      return seconds + " s ";
    } else if (minutes < 60) {
      return minutes + " m ";
    } else if (hours < 24) {
      return hours + " h ";
    } else if (day < 31) {
      return day + " d ";
    } else if (day < 365) {
      return Math.round(day / 31) + " m ";
    } else {
      return Math.floor(day / 365) + " y ";
    }
  };

  const dispatch = useDispatch();
  const modalType = useSelector((state) => state.modal.modalType);

  const handleShowEditPostModal = () => {
    dispatch(selectCard(post));
    dispatch(setModalType("editModal"));
    dispatch(showModal());
  };

  const cardSelected = useSelector((state) => state.modal.selected);
  console.log(cardSelected);

  const handleDelete = () => {
    dispatch(selectCard(post));
    dispatch(deleteSpecificPost(cardSelected._id));
    console.log("delete");
    dispatch(fetchAllPosts());
    dispatch(fetchAllPosts());
  };

  return (
    <>
      {modalType === "editModal" && <EditPostModal post={post} />}
      <Row className="border post-card" style={{ marginBottom: "1rem" }}>
        <Col>
          <Row>
            <Col xs="3" lg="2">
              <img src={post.user.image} alt="" />
            </Col>
            <Col className="d-flex justify-content-between">
              <div>
                <span>{post.user.username}</span>
                <blockquote className="m-0">{post.user.area}</blockquote>
                <blockquote className="m-0">
                  {data(post.createdAt)}

                  <i className="bi bi-globe-americas"></i>
                </blockquote>
              </div>

              <Dropdown align="end">
                <Dropdown.Toggle id="dropdown-basic" className="edit-wrapper">
                  <i className="bi bi-three-dots"></i>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={handleShowEditPostModal}>Edit</Dropdown.Item>
                  <Dropdown.Item onClick={handleDelete}>Delete</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>

            <p>{post.text}</p>
            {post.image && <img className="post-image img-post" src={post.image} alt="" />}

            <Row xs="3" className="text-center">
              <Col xs="3" className="text-center">
                <i className="bi bi-hand-thumbs-up"></i>
                <p className="d-inline">Suggest</p>
              </Col>
              <Col xs="3" className="text-center">
                <i className="bi bi-chat-dots"></i>
                <p className="d-inline">Comment</p>
              </Col>
              <Col xs="3" className="text-center">
                <i className="bi bi-arrow-counterclockwise"></i>
                <p className="d-inline">Share</p>
              </Col>
              <Col xs="3" className="text-center">
                <i className="bi bi-send-arrow-up-fill"></i>
                <p className="d-inline">Send</p>
              </Col>
            </Row>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default MyPost;
