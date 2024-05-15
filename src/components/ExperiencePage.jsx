import { Card, Col, Container, Row } from "react-bootstrap";
import ExperienceCard from "./ExperienceCard";
import { useSelector } from "react-redux";
import MySuggestions from "./Mysuggestions";

const ExperiencePage = () => {
  const experiencesList = useSelector((state) => state.experiences_list);
  const usersList = useSelector((state) => state.users_list);

  return (
    <div className="background">
      <Container className="profile-container ">
        <Row className="justify-content-center gap-2">
          <Col xs={12} md={6} lg={7} className="left-column">
            <Card className="section-container exp-container">
              <div className="inner-section-container ">
                <div className="edit-wrapper">
                  <i className="edit bi bi-pen"></i>
                </div>
                <p className=" section-title">Experience</p>
                {experiencesList.experiences_list.map((experience) => (
                  <ExperienceCard key={experience._id} experience={experience} />
                ))}
              </div>
            </Card>
          </Col>
          <Col xs={3} className="d-none d-md-block right-column">
            {usersList && <MySuggestions usersList={usersList} />}
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default ExperiencePage;
