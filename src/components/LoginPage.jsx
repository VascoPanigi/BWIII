import { useState } from 'react'
import { Col, Row, Form, Button, Container, Image } from 'react-bootstrap'
import { SET_USER_LOGGED, TOGGLE_IS_LOGGED } from '../redux/actions'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import svg from '../assets/img/login.svg'

const PlaintextExample = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email === 'ciao@ciao.it' && password === 'ciao') {
      // const id = "6642750c55621a0015c15faa";
      const id = 'me'
      console.log(id)

      dispatch({ type: TOGGLE_IS_LOGGED, payload: true })
      dispatch({ type: SET_USER_LOGGED, payload: id })
      navigate(`/user/${id}`)
      // navigate(`/user/${id}`);
    }
  }

  return (
    <div className="background-login">
      <Container>
        <Row>
          <Col xs={12} md={12} lg={7} xl={6}>
            <h1 className="display-3">Welcome to your professional community</h1>

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                  Password
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Col>
              </Form.Group>
              <h6>Forgot password?</h6>
              <Button type="submit">Login</Button>
            </Form>

            <Row className="d-flex align-items-center justify-content-center mt-3">
              <Col xs={5}>
                <hr />
              </Col>
              <Col xs={1}>
                <p className="m-0 p-0 text-center">or</p>
              </Col>
              <Col xs={5}>
                <hr />
              </Col>
            </Row>
            <p>
              By clicking Continue to join or sign in, you agree to LinkedIn’s <span>User Agreement</span>,{' '}
              <span>Privacy Policy</span>, and <span>Cookie Policy</span>.
            </p>

            <Button className="join-btn">New to linkedIn? Join Now</Button>
          </Col>

          <Col xs={12} md={4} lg={5} xl={6} className="mb-5 d-flex align-items-center">
            <Image src={svg} className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default PlaintextExample
