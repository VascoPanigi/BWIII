import { Modal, Button, Form, Col, FormGroup } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { hideModal, editExperienceAction, fetchExperiencesAction } from '../redux/actions'
import { useState } from 'react'

const ExpPutModal = ({ expData }) => {
  console.log('expdata console log lalala', expData)
  const dispatch = useDispatch()
  const show = useSelector((state) => state.modal.showModal)
  const userId = useSelector((state) => state.user.other_user_info._id)

  const [role, setRole] = useState(expData.role)
  const [company, setCompany] = useState(expData.company)
  const [startDate, setStartDate] = useState(expData.startDate)
  const [endDate, setEndDate] = useState(expData.endDate)
  const [description, setDescription] = useState(expData.description)
  const [area, setArea] = useState(expData.area)
  const [image, setImageURL] = useState(expData.image)

  const experienceObject = {
    role: role,
    company: company,
    startDate: startDate,
    endDate: endDate,
    description: description,
    area: area,
    image: image,
  }

  const handleClose = () => dispatch(hideModal())
  const handleSubmit = (e) => {
    e.preventDefault()
    // dispatch(modifyProfileAction(experienceObject));
    dispatch(editExperienceAction(userId, expData._id, experienceObject))
    dispatch(fetchExperiencesAction(userId))
    handleClose()
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
                defaultValue={expData.role} ///////
                onChange={(e) => setRole(e.target.value)}
              />
            </Form.Group>
            <FormGroup as={Col} md="12" controlId="validationCompany" className="mt-4">
              <Form.Label>Company</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name of the company"
                defaultValue={expData.company} ///////
                onChange={(e) => setCompany(e.target.value)}
              />
            </FormGroup>
            <FormGroup as={Col} md="12" controlId="validationStart" className="mt-4">
              <Form.Label>Start date</Form.Label>
              <Form.Control
                required
                type="month"
                placeholder="05/17/2024"
                defaultValue={expData.startDate} ///////
                onChange={(e) => setStartDate(e.target.value)}
              />
            </FormGroup>
            <FormGroup as={Col} md="12" controlId="validationEnd" className="mt-4">
              <Form.Label>End date (or expected)</Form.Label>
              <Form.Control
                type="month"
                placeholder="05/17/2025"
                defaultValue={expData.endDate} ///////
                onChange={(e) => setEndDate(e.target.value)}
              />
            </FormGroup>

            <Modal.Title className="mt-4">Experience</Modal.Title>
            <FormGroup as={Col} md="12" controlId="validationDescription" className="mt-4">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Write about your experience"
                defaultValue={expData.description} ///////
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
                defaultValue={expData.area} ///////
                onChange={(e) => setArea(e.target.value)}
              />
            </FormGroup>

            <Modal.Title className="mt-4">Media</Modal.Title>
            <Form.Group as={Col} md="12" controlId="validationImage">
              <Form.Label>Image</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Image Url"
                defaultValue={expData.image}
                onChange={(e) => setImageURL(e.target.value)}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" variant="primary">
              Save
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}

export default ExpPutModal
