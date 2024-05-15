import { Modal, Button, Form, Col, FormGroup } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { hideModal, modifyProfileAction } from '../redux/actions'
import { useState } from 'react'

const ExpModal = ({ userData }) => {
  const dispatch = useDispatch()
  const show = useSelector((state) => state.modal.showModal)

  const [role, setRole] = useState(userData.user_info.name)
  const [company, setComapny] = useState(userData.user_info.surname)
  const [startDate, setStartDate] = useState(userData.user_info.bio)
  const [endDate, setEndDate] = useState(userData.user_info.bio)
  const [description, setDescription] = useState(userData.user_info.title)
  const [area, setArea] = useState(userData.user_info.area)

  const profileObject = {
    role: role,
    company: company,
    startDate: startDate,
    endDate: endDate,
    description: description,
    area: area,
  }

  const handleClose = () => dispatch(hideModal())
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(modifyProfileAction(profileObject))
  }
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit experience</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group as={Col} md="12" controlId="validationRole">
              <Form.Label>Role*</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Your role"
                defaultValue={userData.user_info.name} ///////
                onChange={(e) => setRole(e.target.value)}
              />
            </Form.Group>
            <FormGroup as={Col} md="12" controlId="validationCompany" className="mt-4">
              <Form.Label>Company</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name of the company"
                defaultValue={userData.user_info.surname} ///////
                onChange={(e) => setComapny(e.target.value)}
              />
            </FormGroup>
            <FormGroup as={Col} md="12" controlId="validationStart" className="mt-4">
              <Form.Label>Start date</Form.Label>
              <Form.Control
                as="number"
                placeholder="05/17/2024"
                defaultValue={userData.user_info.bio} ///////
                onChange={(e) => setStartDate(e.target.value)}
              />
            </FormGroup>
            <FormGroup as={Col} md="12" controlId="validationEnd" className="mt-4">
              <Form.Label>End date (or expected)</Form.Label>
              <Form.Control
                as="number"
                placeholder="05/17/2025"
                defaultValue={userData.user_info.bio} ///////
                onChange={(e) => setEndDate(e.target.value)}
              />
            </FormGroup>

            <Modal.Title className="mt-4">Experience</Modal.Title>
            <FormGroup as={Col} md="12" controlId="validationDescription" className="mt-4">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Write about your exxperience"
                defaultValue={userData.user_info.bio} ///////
                rows={4}
                onChange={(e) => setDescription(e.target.value)}
              />
            </FormGroup>

            <Modal.Title className="mt-4">Location</Modal.Title>
            <FormGroup as={Col} md="12" controlId="validationLocation" className="mt-1">
              <Form.Label>Country/Region*</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Company location"
                defaultValue={userData.user_info.area} ///////
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

export default ExpModal
