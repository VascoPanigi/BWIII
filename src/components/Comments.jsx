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
            <h6>Name</h6>
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum eligendi ducimus nulla vitae eaque dicta
              at, nisi assumenda similique suscipit facilis est incidunt quo perspiciatis? Voluptates unde voluptas
              ratione! Nesciunt. Rerum esse veniam, dolorum quis et eos cupiditate ipsum. A voluptate magnam dicta? Sed
              accusamus illum voluptate explicabo enim, culpa cumque quidem, reiciendis distinctio odit quasi doloribus
              et consequuntur at?
            </span>
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
