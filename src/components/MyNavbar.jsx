import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Image } from 'react-bootstrap'
import bell from '../assets/icons/bell.svg'
import grid from '../assets/icons/grid.svg'
import messaging from '../assets/icons/messaging.svg'
import search from '../assets/icons/search.svg'
import network from '../assets/icons/network.svg'
import home from '../assets/icons/home.svg'
import jobs from '../assets/icons/jobs.svg'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import logo from '../assets/icons/logo.svg'

const MyNavbar = () => {
  return (
    <Navbar
      expand="lg"
      className="navbar-container bg-body-tertiary align-items-center"
    >
      <Container className="justify-content-between">
        <div className="d-flex align-items-center">
          <Navbar.Brand href="#home">
            <Image src={logo}></Image>
          </Navbar.Brand>
          <Form inline>
            <Row>
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className=" mr-sm-2"
                />
              </Col>
            </Row>
          </Form>
        </div>
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="text-center" href="#home">
                <Image src={home}></Image>
                <p>Home</p>
              </Nav.Link>
              <Nav.Link className="text-center" href="#rete">
                <Image src={network}></Image>
                <p>My network</p>
              </Nav.Link>
              <Nav.Link className="text-center" href="#rete">
                <Image src={jobs}></Image>
                <p>Jobs</p>
              </Nav.Link>
              <Nav.Link className="text-center" href="#messaggi">
                <Image src={messaging}></Image>
                <p>Messaging</p>
              </Nav.Link>
              <Nav.Link className="text-center" href="#notifiche">
                <Image src={bell}></Image>
                <p>Notifications</p>
              </Nav.Link>
              <NavDropdown title="Me" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="For Business" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  )
}

export default MyNavbar
