import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { useDispatch, useSelector } from 'react-redux'
import { hideModal, postComment } from '../redux/actions'
import { Form, Image } from 'react-bootstrap'
import { useEffect, useState } from 'react'

const PostModal = () => {
  const dispatch = useDispatch()
  const show = useSelector((state) => state.modal.showModal)
  const handleClose = () => dispatch(hideModal())

  const userData = useSelector((state) => state.user)
  const userInfo = userData.user_info

  const [postText, setPostText] = useState('')
  const [image, setImageURL] = useState('')
  const [isEditing, setIsEditing] = useState(false)

  const handleInputChange = (event) => {
    setPostText(event.target.value)
  }
  const handleImageChange = (event) => {
    setImageURL(event.target.value)
  }

  const postObjToSubmit = {
    text: postText,
    image: image,
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(postComment(postObjToSubmit))
  }

  const toggleEdit = () => {
    setIsEditing(!isEditing)
  }

  useEffect(() => {
    if (show) {
      setPostText('')
      setImageURL('')
    }
  }, [show])

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
          <Modal.Footer className="d-flex align-items-center justify-content-between">
            <Button className={`pic-edit-btn ${isEditing ? 'active' : ''}`} onClick={toggleEdit}>
              <i className="edit bi bi-pen"></i>
            </Button>
            {isEditing && (
              <Form onSubmit={handleClose} className="d-flex gap-5 pic-edit-form">
                <Form.Group>
                  <Form.Control type="text" value={image} onChange={handleImageChange} placeholder="Post an image!" />
                </Form.Group>
              </Form>
            )}
            <Button
              type="submit"
              onClick={postText ? handleClose : null}
              className={!postText ? 'save-inactive' : 'save-active'}
            >
              Post
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}

export default PostModal
