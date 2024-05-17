import { Col, Dropdown, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { deleteSpecificPost, fetchAllPosts, selectCard, setModalType, showIdModal } from '../redux/actions'
import EditPostModal from './EditPostModal'
import { GET_SPECIFIC_PROFILE } from '../redux/actions'
import { useNavigate } from 'react-router-dom'
import { fetchProfileAction, fetchExperiencesAction } from '../redux/actions'

const MyPost = ({ post }) => {
  // console.log('poststs', post) /////////
  const data = (data) => {
    const nowDate = new Date()
    const newData = new Date(data)
    const oneDay = 1000 * 60 * 60 * 24
    const milliseconds = Math.abs(nowDate - newData)
    const day = Math.round(milliseconds / oneDay)
    const seconds = Math.round(milliseconds / 1000)
    const minutes = Math.round(seconds / 60)
    const hours = Math.round(minutes / 60)

    if (seconds < 60) {
      return seconds + ' s '
    } else if (minutes < 60) {
      return minutes + ' m '
    } else if (hours < 24) {
      return hours + ' h '
    } else if (day < 31) {
      return day + ' d '
    } else if (day < 365) {
      return Math.round(day / 31) + ' m '
    } else {
      return Math.floor(day / 365) + ' y '
    }
  }

  const dispatch = useDispatch()
  const modalType = useSelector((state) => state.modal.modalType)
  const navigate = useNavigate()

  const handleShowEditPostModal = () => {
    dispatch(selectCard(post))
    dispatch(setModalType('editModal'))
    dispatch(showIdModal(post._id))
  }

  // console.log(cardSelected)
  const showModalId = useSelector((state) => state.modal.showIdModal)

  const handleDelete = () => {
    dispatch(selectCard(post))
    dispatch(deleteSpecificPost(post._id))
    console.log('delete')
    dispatch(fetchAllPosts())
    dispatch(fetchAllPosts())
  }

  const handleClick = (post) => {
    dispatch({ type: GET_SPECIFIC_PROFILE, payload: post.user })
    dispatch(fetchExperiencesAction(post.user._id))
    dispatch(fetchProfileAction(post.user._id))
    navigate(`/user/${post.user._id}`)
  }

  const loggedIn = useSelector((state) => state.login.isLogged)
  const userInfo = useSelector((state) => state.user.user_info)

  return (
    <>
      {modalType === 'editModal' && showModalId === post._id && <EditPostModal post={post} />}
      <Row className="border post-card p-0 mx-0 mx-md-0" style={{ marginBottom: '1rem' }}>
        <Col>
          <Row className="justify-content-around mx-2 mx-md-0 px-3">
            <Col xs={3} md={2}>
              <img src={post.user.image} alt="" className="pointer" />
            </Col>
            <Col className="d-flex justify-content-between">
              <div>
                <div className="post-username" onClick={() => handleClick(post)}>
                  <span>{post.user.name}</span>
                  <span> {post.user.surname}</span>
                </div>
                <blockquote className="m-0">{post.user.area}</blockquote>
                <blockquote className="m-0">
                  {data(post.createdAt)}

                  <i className="bi bi-globe-americas"></i>
                </blockquote>
              </div>

              {loggedIn && userInfo._id === post.user._id && (
                <Dropdown align="end">
                  <Dropdown.Toggle id="dropdown-basic" className="edit-wrapper">
                    <i className="bi bi-three-dots"></i>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={handleShowEditPostModal}>Edit</Dropdown.Item>
                    <Dropdown.Item onClick={handleDelete}>Delete</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              )}
            </Col>

            <p className="my-2">{post.text}</p>
            {post.image && <img className="post-image img-post pointer" src={post.image} alt="" />}

            <Row xs={3} className="px-0" style={{ fontSize: '15px' }}>
              <Col xs={3} className="text-center pointer">
                <i className="bi bi-hand-thumbs-up"></i>
                <p className="d-inline">Suggest</p>
              </Col>
              <Col xs={3} className="text-center pointer">
                <i className="bi bi-chat-dots"></i>
                <p className="d-inline">Comment</p>
              </Col>
              <Col xs={3} className="text-center pointer">
                <i className="bi bi-arrow-counterclockwise"></i>
                <p className="d-inline">Share</p>
              </Col>
              <Col xs={3} className="text-center pointer">
                <i className="bi bi-send-arrow-up-fill"></i>
                <p className="d-inline">Send</p>
              </Col>
            </Row>
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default MyPost
