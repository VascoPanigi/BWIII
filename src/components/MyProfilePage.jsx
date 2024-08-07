import { Col, Container, Row } from "react-bootstrap";
import ProfileHero from "./ProfileHero";
import MySuggestions from "./Mysuggestions";
import MyProjects from "./MyProjects";
import Education from "./Education";
import Experience from "./Experience";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExperiencesAction, fetchProfileAction, fetchUsersListAction } from "../redux/actions";
import { useParams } from "react-router-dom";

const MyProfilePage = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);
  const usersList = useSelector((state) => state.users_list);
  const experiencesList = useSelector((state) => state.experiences_list);
  // const loginStatus = useSelector((state) => state.login);
  // console.log("showUserData", userData);
  // console.log("showOtherUserData", userData.other_user_info);
  // console.log("experiencetest", experiencesList);
  // const otherUser = userData.other_user_info;
  // const otherUserId = userData.other_user_info._id;
  console.log(usersList.users_list);

  // const loginStatus = useSelector((state) => state.login);
  // console.log(loginStatus);

  const params = useParams();
  // const navigate = useNavigate();

  console.log("ID dinamico", params.dynamicValue);
  // console.log("parametri", params);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchProfileAction(params.dynamicValue));
    if (usersList.users_list.length === 0) {
      dispatch(fetchUsersListAction());
    }

    if (params.dynamicValue === "me") {
      dispatch(fetchExperiencesAction("6642750c55621a0015c15faa"));
    } else {
      dispatch(fetchExperiencesAction(params.dynamicValue));
    }
  }, []);

  return (
    <div className="background">
      <Container className="profile-container">
        <Row className="justify-content-center gap-2">
          <Col xs={12} md={6} lg={7} className="left-column">
            {userData && <ProfileHero />}
            <MyProjects />
            {experiencesList && <Experience />}
            <Education />
          </Col>
          <Col xs={3} className="d-none d-md-block right-column">
            {usersList && <MySuggestions usersList={usersList} />}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MyProfilePage;
