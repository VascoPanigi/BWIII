import { Col, Container, Row } from 'react-bootstrap'
import ProfileHero from './ProfileHero'

const MyProfilePage = () => {
  return (
    <Container className="profile-container ">
      <Row className="justify-content-center gap-4">
        <Col
          xs={12}
          md={7}
          lg={8}
          className="left-column"
          style={{ backgroundColor: 'green' }}
        >
          <ProfileHero />
        </Col>
        <Col
          xs={3}
          className="d-xs-none d-md-block right-column"
          style={{ backgroundColor: 'blue' }}
        ></Col>
      </Row>
    </Container>
  )
}

export default MyProfilePage
