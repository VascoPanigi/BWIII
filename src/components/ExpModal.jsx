import { Modal, Button, Form, Col, FormGroup } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { addExperienceAction, fetchExperiencesAction, hideModal, modifyProfileAction } from '../redux/actions'
import { useEffect, useState } from 'react'

const ExpModal = () => {
  const dispatch = useDispatch()
  const show = useSelector((state) => state.modal.showModal)
  const userId = useSelector((state) => state.user.other_user_info._id)

  const [role, setRole] = useState('')
  const [company, setCompany] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [description, setDescription] = useState('')
  const [area, setArea] = useState('')
  const [image, setImageURL] = useState('')

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
    dispatch(modifyProfileAction(experienceObject))
    dispatch(addExperienceAction(userId, experienceObject))
    dispatch(fetchExperiencesAction(userId))
    handleClose()
  }

  useEffect(() => {
    if (show) {
      setRole('')
      setCompany('')
      setStartDate('')
      setEndDate('')
      setDescription('')
      setArea('')
      setImageURL('')
    }
  }, [show])

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add experience</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group as={Col} md="12" controlId="validationRole">
              <Form.Label>Role*</Form.Label>
              <Form.Control required type="text" placeholder="Your role" onChange={(e) => setRole(e.target.value)} />
            </Form.Group>
            <FormGroup as={Col} md="12" controlId="validationCompany" className="mt-4">
              <Form.Label>Company*</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Name of the company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </FormGroup>
            <FormGroup as={Col} md="12" controlId="validationStart" className="mt-4">
              <Form.Label>Start date</Form.Label>
              <Form.Control required type="month" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
            </FormGroup>
            <FormGroup as={Col} md="12" controlId="validationEnd" className="mt-4">
              <Form.Label>End date (or expected)</Form.Label>
              <Form.Control required type="month" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
            </FormGroup>

            <Modal.Title className="mt-4">Experience</Modal.Title>
            <FormGroup as={Col} md="12" controlId="validationDescription" className="mt-4">
              <Form.Label>Description*</Form.Label>
              <Form.Control
                required
                as="textarea"
                placeholder="Write about your experience"
                value={description}
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
                value={area}
                placeholder="Company location"
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

export default ExpModal
