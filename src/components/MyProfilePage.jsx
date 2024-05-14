import { Col, Container, Row } from 'react-bootstrap'
import ProfileHero from './ProfileHero'
import MySuggestions from './Mysuggestions'
import MyProjects from './MyProjects'
import Education from './Education'
import Experience from './Experience'

const MyProfilePage = () => {
  return (
    <div className="background">
      <Container className="profile-container">
        <Row className="justify-content-center gap-2">
          <Col xs={12} md={6} lg={7} className="left-column">
            <ProfileHero />
            <MyProjects />
            <Experience />
            <Education />
          </Col>
          <Col xs={3} className="d-none d-md-block right-column">
            <MySuggestions />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default MyProfilePage
