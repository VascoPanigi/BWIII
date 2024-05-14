import { Modal, Button, Form, Col, FormGroup } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { hideModal } from '../redux/actions'

const EditModal = ({ userData }) => {
  console.log('edit', userData)
  const dispatch = useDispatch()
  const show = useSelector((state) => state.modal.showModal)

  const handleClose = () => dispatch(hideModal())

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit intro</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Col} md="12" controlId="validationName">
            <Form.Label>First name*</Form.Label>
            <Form.Control required type="text" placeholder="First name" defaultValue={userData.user_info.name} />
          </Form.Group>
          <FormGroup as={Col} md="12" controlId="validationLastname" className="mt-4">
            <Form.Label>Last name*</Form.Label>
            <Form.Control required type="text" placeholder="Last name" defaultValue={userData.user_info.surname} />
          </FormGroup>
          <FormGroup as={Col} md="12" controlId="validationHeadline" className="mt-4">
            <Form.Label>Headline*</Form.Label>
            <Form.Control
              required
              as="textarea"
              placeholder="Write about yourself"
              defaultValue={userData.user_info.bio}
              rows={4}
            />
          </FormGroup>
          <Modal.Title className="mt-4">Education</Modal.Title>
          <FormGroup as={Col} md="12" controlId="validationEducation" className="mt-1">
            <Form.Label>School*</Form.Label>
            <Form.Control required type="text" placeholder="School name" defaultValue={userData.user_info.title} />
          </FormGroup>
          <Modal.Title className="mt-4">Location</Modal.Title>
          <FormGroup as={Col} md="12" controlId="validationLocation" className="mt-1">
            <Form.Label>Country/Region*</Form.Label>
            <Form.Control required type="text" placeholder="Your location" defaultValue={userData.user_info.area} />
          </FormGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default EditModal
