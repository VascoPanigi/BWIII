import { Modal, Button, Form, Col, FormGroup } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { hideModal, modifyProfileAction } from '../redux/actions'
import { useState } from 'react'

const EditModal = () => {
  const userData = useSelector((state) => state.user)

  const userInfo = userData.user_info

  const dispatch = useDispatch()
  const show = useSelector((state) => state.modal.showModal)
  const [name, setName] = useState(userInfo.name)
  const [surname, setSurname] = useState(userInfo.surname)
  const [bio, setBio] = useState(userInfo.bio)
  const [title, setTitle] = useState(userInfo.title)
  const [area, setArea] = useState(userInfo.area)

  const profileObject = {
    name: name,
    surname: surname,
    bio: bio,
    title: title,
    area: area,
  }

  const handleClose = () => dispatch(hideModal())

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log("sono l'oggetto della put", profileObject);
    dispatch(modifyProfileAction(profileObject))
    dispatch(modifyProfileAction(userInfo._id))
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit intro</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group as={Col} md="12" controlId="validationName">
              <Form.Label>First name*</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First name"
                defaultValue={userInfo.name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <FormGroup as={Col} md="12" controlId="validationLastname" className="mt-4">
              <Form.Label>Last name*</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Last name"
                defaultValue={userInfo.surname}
                onChange={(e) => setSurname(e.target.value)}
              />
            </FormGroup>
            <FormGroup as={Col} md="12" controlId="validationHeadline" className="mt-4">
              <Form.Label>Headline*</Form.Label>
              <Form.Control
                required
                as="textarea"
                placeholder="Write about yourself"
                defaultValue={userInfo.bio}
                rows={4}
                onChange={(e) => setBio(e.target.value)}
              />
            </FormGroup>
            <Modal.Title className="mt-4">Education</Modal.Title>
            <FormGroup as={Col} md="12" controlId="validationEducation" className="mt-1">
              <Form.Label>School*</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="School name"
                defaultValue={userInfo.title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </FormGroup>
            <Modal.Title className="mt-4">Location</Modal.Title>
            <FormGroup as={Col} md="12" controlId="validationLocation" className="mt-1">
              <Form.Label>Country/Region*</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Your location"
                defaultValue={userInfo.area}
                onChange={(e) => setArea(e.target.value)}
              />
            </FormGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" variant="primary" onClick={handleClose}>
              Save
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}

export default EditModal
