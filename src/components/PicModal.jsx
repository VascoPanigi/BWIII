import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { hideModal, modifyProfileAction } from '../redux/actions'
import { Form, Image } from 'react-bootstrap'

const PicModal = () => {
  const userData = useSelector((state) => state.user)

  const userInfo = userData.user_info

  const dispatch = useDispatch()
  const show = useSelector((state) => state.modal.showModal)

  const handleClose = () => {
    setIsEditing(false)
    dispatch(hideModal())
  }

  const [image, setImageURL] = useState(userInfo.image)
  const [isEditing, setIsEditing] = useState(false)

  const toggleEdit = () => {
    setIsEditing(!isEditing)
  }

  const handleInputChange = (e) => {
    setImageURL(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const profileObject = {
      image: image,
    }
    dispatch(modifyProfileAction(profileObject))
    handleClose()
  }

  return (
    <>
      <Modal show={show} onHide={handleClose} className="pic-modal">
        <div className="d-flex align-items-center justify-content-between">
          <h5 className="ms-4 mt-3">Profile photo</h5>
          <Button onClick={handleClose} className="close-btn mt-3 me-3">
            <i className="bi bi-x-lg"></i>
          </Button>
        </div>
        <Modal.Body>
          <Image src={userInfo.image} />
        </Modal.Body>
        <Modal.Footer>
          <div className="d-flex align-items-center justify-content-between">
            <Button className={`edit-wrapper ${isEditing ? 'active' : ''}`} onClick={toggleEdit}>
              <i className="edit bi bi-pen"></i>
            </Button>
            {isEditing && (
              <Form onSubmit={handleSubmit} className="d-flex gap-5">
                <Form.Group>
                  <Form.Control type="text" value={image} onChange={handleInputChange} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                  Save
                </Button>
              </Form>
            )}
          </div>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default PicModal
