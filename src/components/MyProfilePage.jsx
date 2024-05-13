import { Col, Container, Row } from "react-bootstrap";
import ProfileHero from "./ProfileHero";
import MySuggestions from "./Mysuggestions";
import Education from "./Education";
import Experience from "./Experience";

const MyProfilePage = () => {
  return (
    <Container className="profile-container ">
      <Row className="justify-content-center gap-4">
        <Col xs={12} md={6} lg={7} className="left-column" style={{ backgroundColor: "green" }}>
          <ProfileHero />
          <Experience />
          <Education />
        </Col>
        <Col xs={3} className="d-none d-md-block right-column" style={{ backgroundColor: "blue" }}>
          <MySuggestions />
        </Col>
      </Row>
    </Container>
  );
};

export default MyProfilePage;
