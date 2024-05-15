import { Container, Row, Col, Form } from 'react-bootstrap'
import questionmark from '../assets/icons/footerquestion.svg'
import gear from '../assets/icons/footergear.svg'
import shield from '../assets/icons/footershield.svg'
import { Image } from 'react-bootstrap'

const MyFooter = () => {
  return (
    <Container className="p-0">
      <footer className="pt-5">
        <Row>
          <Col xs={6} md={2} className="mb-3">
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  About
                </a>
              </li>
              <li className="nav-item mb-2 d-md-none">
                <a href="#" className="nav-link p-0 text-body-secondary ">
                  Talent Solutions
                </a>
              </li>
              <li className="nav-item mb-2  d-md-none">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Careers
                </a>
              </li>
              <li className="nav-item mb-2 d-none d-md-block">
                <a href="#" className="nav-link p-0 text-body-secondary ">
                  Community Guidelines
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Privacy & Terms
                </a>
              </li>
              <li className="nav-item mb-2 d-md-none">
                <a href="#" className="nav-link p-0 text-body-secondary ">
                  Advertising
                </a>
              </li>
              <li className="nav-item mb-2 d-md-none">
                <a href="#" className="nav-link p-0 text-body-secondary ">
                  Mobile
                </a>
              </li>
              <li className="nav-item mb-2 d-none d-md-block">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Sales Solutions
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Safety Center
                </a>
              </li>
            </ul>
          </Col>

          <Col xs={6} md={2} className="mb-3">
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Accessibility
                </a>
              </li>
              <li className="nav-item mb-2 d-md-none">
                <a href="#" className="nav-link p-0 text-body-secondary ">
                  Community Guidelines
                </a>
              </li>
              <li className="nav-item mb-2 d-md-none">
                <a href="#" className="nav-link p-0 text-body-secondary ">
                  Marketing Solutions
                </a>
              </li>
              <li className="nav-item mb-2 d-none d-md-block">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Careers
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Ad Choices
                </a>
              </li>
              <li className="nav-item mb-2 d-md-none">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Sales Solutions
                </a>
              </li>
              <li className="nav-item mb-2 d-md-none">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Small Business
                </a>
              </li>
              <li className="nav-item mb-2 d-none d-md-block">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Mobile
                </a>
              </li>
            </ul>
          </Col>

          <Col xs={4} md={2} className="mb-3 d-none d-md-block">
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Talent Solutions
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary ">
                  Marketing Solutions
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary ">
                  Ad Choices
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Advertising
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Small Business
                </a>
              </li>
            </ul>
          </Col>
          <Col xs={6} md={3} className="mb-3">
            <div className="d-flex mb-2 align-items-start">
              <Image className="me-2 mt-1" src={questionmark} />
              <div>
                <p className="m-0">Questions?</p>
                <span>Visit our Help Center.</span>
              </div>
            </div>
            <div className="d-flex mb-2 align-items-start">
              <Image className="me-2 mt-1" src={gear} />
              <div>
                <p className="m-0">Manage your account and privacy</p>
                <span>Go to your Settings.</span>
              </div>
            </div>
            <div className="d-flex mb-2 align-items-start">
              <Image className="me-2 mt-1" src={shield} />
              <div>
                <p className="m-0">Recommendation transparency</p>
                <span>Learn more about Recommended Content.</span>
              </div>
            </div>
          </Col>

          <Col md={3} className="offset-md-1 m-0 mb-3 d-none d-md-block">
            <span className="m-0">Select Language</span>
            <Form.Select aria-label="Default select example">
              <option>Select Language...</option>
              <option value="1">English</option>
              <option value="2">Italian</option>
              <option value="3">Spanish</option>
            </Form.Select>
          </Col>
        </Row>
        <Row>
          <div className="d-md-none">
            <span className="m-0">Select Language</span>
            <Form.Select aria-label="Default select example">
              <option>Select Language...</option>
              <option value="1">English</option>
              <option value="2">Italian</option>
              <option value="3">Spanish</option>
            </Form.Select>
          </div>
        </Row>

        <div className="d-flex flex-column flex-sm-row justify-content-between mt-2 mb-4">
          <span>LinkedIn Corporation © 2024</span>
        </div>
      </footer>
    </Container>
  )
}

export default MyFooter
