import { Col, Container, Row } from "react-bootstrap";
import ProfileHero from "./ProfileHero";
import MySuggestions from "./Mysuggestions";
import MyProjects from "./MyProjects";
import Education from "./Education";
import Experience from "./Experience";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfileAction, fetchUsersListAction } from "../redux/actions";

const MyProfilePage = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);
  const usersList = useSelector((state) => state.users_list);
  console.log(userData);

  console.log(usersList);

  useEffect(() => {
    dispatch(fetchProfileAction("me"));
    dispatch(fetchUsersListAction());
  }, []);

  return (
    <div className="background">
      <Container className="profile-container">
        <Row className="justify-content-center gap-2">
          <Col xs={12} md={6} lg={7} className="left-column">
            {userData && <ProfileHero userData={userData} />}
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
  );
};

export default MyProfilePage;
