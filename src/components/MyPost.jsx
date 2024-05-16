import { Col, Row } from "react-bootstrap";

const MyPost = ({ post }) => {
  return (
    <>
      <Row className="border" style={{ marginBottom: "1rem" }}>
        <Col>
          <Row>
            <Col xs="3" lg="2">
              <img src={post.user.image} alt="" />
            </Col>
            <Col>
              <span>{post.user.username}</span>
              <blockquote className="m-0">{post.user.area}</blockquote>
              <blockquote className="m-0">
                3s <strong>.</strong>
                <i className="bi bi-globe-americas"></i>
              </blockquote>
            </Col>
            <p>{post.text}</p>
            {post.image && <img className="post-image img-post" src={post.image} alt="" />}

            <Row xs="3" className="text-center">
              <Col xs="3" className="text-center">
                <i className="bi bi-hand-thumbs-up"></i>
                <p className="d-inline">Consiglia</p>
              </Col>
              <Col xs="3" className="text-center">
                <i className="bi bi-chat-dots"></i>
                <p className="d-inline">Commenta</p>
              </Col>
              <Col xs="3" className="text-center">
                <i className="bi bi-arrow-counterclockwise"></i>
                <p className="d-inline">Diffondi il post</p>
              </Col>
              <Col xs="3" className="text-center">
                <i className="bi bi-send-arrow-up-fill"></i>
                <p className="d-inline">Invia</p>
              </Col>
            </Row>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default MyPost;
