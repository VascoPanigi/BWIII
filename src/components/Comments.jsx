import { Col, Image, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import propic from '../assets/img/propic.jpeg'

const Comments = ({ post }) => {
  const userData = useSelector((state) => state.user.user_info)
  const loggedIn = useSelector((state) => state.login.isLogged)

  return (
    <>
      <Row className="p-0 mt-3">
        <Col xs={2} className="p-0">
          {loggedIn ? (
            <Image src={userData.image} alt="" className="pointer comment-propic" />
          ) : (
            <Image src={propic} className="comment-propic pointer" />
          )}
        </Col>
        <Col xs={10} className="p-0">
          <input type="text" placeholder="Add a comment..." />
        </Col>
      </Row>
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
            <span>{post.user.bio}</span>
            <p>This is a comment</p>
          </div>
          <div className="mb-1">
            <small>Like</small> | <small>Reply</small>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default Comments
