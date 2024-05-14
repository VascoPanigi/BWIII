import { Col, Container, Row } from 'react-bootstrap'
import ProfileHero from './ProfileHero'
import MySuggestions from './Mysuggestions'
import MyProjects from './MyProjects'
import Education from './Education'
import Experience from './Experience'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProfileAction, fetchUsersListAction, fetchExperiencesAction } from '../redux/actions'
import { useParams } from 'react-router-dom'

const MyProfilePage = () => {
  const dispatch = useDispatch()
  const userData = useSelector((state) => state.user)
  const usersList = useSelector((state) => state.users_list)
  const experiencesList = useSelector((state) => state.experiences_list)
  // const loginStatus = useSelector((state) => state.login);
  console.log('showUserData', userData)
  console.log('experiencetest', experiencesList)

  console.log(usersList)

  const loginStatus = useSelector((state) => state.login)
  console.log(loginStatus)

  const params = useParams()
  // const navigate = useNavigate();

  console.log('ID dinamico', params.dynamicValue)

  useEffect(() => {
    dispatch(fetchProfileAction(params.dynamicValue))
    dispatch(fetchUsersListAction())
    dispatch(fetchExperiencesAction(params.dynamicValue))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="background">
      <Container className="profile-container">
        <Row className="justify-content-center gap-2">
          <Col xs={12} md={6} lg={7} className="left-column">
            {userData && <ProfileHero userData={userData} />}
            <MyProjects />
            {experiencesList && <Experience experiencesList={experiencesList} />}
            <Education />
          </Col>
          <Col xs={3} className="d-none d-md-block right-column">
            {usersList && <MySuggestions usersList={usersList} />}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default MyProfilePage
