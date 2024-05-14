import { Col, Container, Row } from "react-bootstrap";
import ProfileHero from "./ProfileHero";
import MySuggestions from "./Mysuggestions";
import MyProjects from "./MyProjects";
import Education from "./Education";
import Experience from "./Experience";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfileAction, fetchUsersListAction, fetchExperiencesAction } from "../redux/actions";

const MyProfilePage = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);
  const usersList = useSelector((state) => state.users_list);
  const experiencesList = useSelector((state) => state.experiences_list);
  console.log("showUserData", userData);

  console.log(usersList);

  useEffect(() => {
    dispatch(fetchProfileAction("me"));
    dispatch(fetchUsersListAction());
    dispatch(fetchExperiencesAction(userData.user_info._id));
  }, []);

  return (
    <div className="background">
      <Container className="profile-container">
        <Row className="justify-content-center gap-2">
          <Col xs={12} md={6} lg={7} className="left-column">
            {userData && <ProfileHero userData={userData} />}
            <MyProjects />
            <Experience experiencesList={experiencesList} />
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
