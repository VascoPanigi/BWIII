import { Button, Col, Container, Image, NavLink, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import img from '../assets/img/img1.jpg'
import { useEffect } from 'react'
import { fetchAllPosts, setModalType, showModal } from '../redux/actions'
import MyPost from './MyPost'
import MySuggestions from './Mysuggestions'
import PostModal from './PostModal'
import propic from '../assets/img/propic.jpeg'
import { Link } from 'react-router-dom'

const MyHome = () => {
  const AllPosts = useSelector((state) => state.posts.posts)
  const userData = useSelector((state) => state.user.user_info)
  const loginStatus = useSelector((state) => state.login)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllPosts())
  }, [])

  const modalType = useSelector((state) => state.modal.modalType)

  const handleShowPostModal = () => {
    if (loginStatus.isLogged) {
      dispatch(setModalType('post'))
      dispatch(showModal())
    } else {
      alert('You need to login to start posting')
    }
  }

  return (
    <>
      <Container fluid className="container-home">
        <Row className="d-flex justify-content-center gap-4">
          <Col xs={12} md={4} xl={3} xxl={2}>
            <Row className="d-flex flex-column side-bar border">
              <Col className="d-flex flex-column align-items-center">
                <img src={img} alt="" />
                {loginStatus.isLogged ? (
                  <Image src={userData.image} className="profile pointer" />
                ) : (
                  <Image src={propic} className="profile pointer" />
                )}
                {loginStatus.isLogged && (
                  <>
                    <h4 className="mt-3">
                      {userData.name} {userData.surname}
                    </h4>
                    <p className="bio">{userData.bio} </p>
                  </>
                )}
              </Col>
              <Col className="d-flex flex-column  justify-content-center">
                {loginStatus.isLogged ? (
                  <>
                    <p className="mt-2 d-flex justify-content-between px-2 par pointer">
                      Profile views <span className="text-primary">22</span>
                    </p>
                    <p className="m-0 d-flex justify-content-between px-2 pointer">
                      Connections <span className="text-primary">100</span>
                    </p>
                    <h6 className="pointer">Grow your network</h6>
                  </>
                ) : (
                  <Link to={'/login'} className="my-2 text-center w-100">
                    <Button className="login-btn">Login</Button>
                  </Link>
                )}
              </Col>
              <Col>
                <p className="par px-2 m-0 text-start">Boost your career with exclusive tools</p>
                <div className="d-flex align-items-center p-2">
                  <img
                    className="icon"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz1uSNb8MRNoJOfbeOEjRrH07jRDqYscBYMKA03KY-a4tc34sj"
                    alt=""
                  />
                  <h6 className="second-h6 pointer">Premium for €0</h6>
                </div>
                <div className="d-flex align-items-center par p-2 gap-2">
                  <i className="bi bi-bookmark-fill ps-1"></i>

                  <h6 className="third-h6 pointer">Saved items</h6>
                </div>
              </Col>
            </Row>

            <Row className="border bottom-side">
              <Col className="bottom-side-col">
                <a href="#">Groups</a>
                <div className="d-flex justify-content-between align-items-center">
                  <a href="#">Events</a>
                  <i className="bi bi-plus text-black fs-4"></i>
                </div>

                <a href="#">Followed Hashtags</a>

                <p className="par show-all-projects">Discover more</p>
              </Col>
            </Row>
          </Col>

          <>
            {modalType === 'post' && <PostModal />}

            <Col className="center-home" xs={12} md={5} xl={4}>
              <Row className="start-post-card border">
                <Col>
                  <Row className="align-items-center py-0">
                    <Col md={2} xxl={1} className="p-0">
                      {loginStatus.isLogged ? (
                        <Image src={userData.image} className="profile pointer" />
                      ) : (
                        <Image src={propic} className="profile pointer" />
                      )}
                    </Col>
                    <Col xs={10} xxl={{ span: 10, offset: 1 }} className="p-0">
                      <NavLink onClick={handleShowPostModal}>
                        <input type="text" placeholder="Start a post" />
                      </NavLink>
                    </Col>
                  </Row>

                  <Row className="d-flex justify-content-between pb-0 pointer">
                    <Col xs="4" className="d-flex align-items-center gap-1 justify-content-center">
                      <i className="bi bi-card-image img"></i>
                      <p>Media</p>
                    </Col>
                    <Col xs="4" className="d-flex align-items-center gap-1 justify-content-center pointer">
                      <i className="bi bi-calendar3 calendar"></i>
                      <p>Event</p>
                    </Col>
                    <Col xs="4" className="d-flex align-items-center gap-1 justify-content-center pointer">
                      <i className="bi bi-list-columns-reverse list"></i>
                      <p>Write article</p>
                    </Col>
                  </Row>
                </Col>
              </Row>

              {AllPosts && AllPosts.slice(-25, -1).map((post) => <MyPost key={post._id} post={post} />)}
            </Col>
            <Col md={3} xl={3} xxl={2} className="d-none d-xl-block p-0">
              <MySuggestions />
            </Col>
          </>
          {/* <>
          <Col className="side-bar border border-side" xs="none" lg="3">
            <h5>LinkedIn News</h5>
            <span>Main Stories</span>
            <p>
              Sustainability is a priority for Gen Z<span className="d-block">1 day • 2.319 readers</span>
            </p>
            <p>
              Where blue flags fly
              <span className="d-block">20 h • 249 readers</span>
            </p>
            <p>
              Afterpay and Deutsche Bank join forces
              <span className="d-block">5 days • 876 readers</span>
            </p>
            <p>
              How an automated selling point is born
              <span className="d-block">22 h • 280 readers</span>
            </p>
            <p>
              Smart cities need technicians
              <span className="d-block">1 day • 323 readers</span>
            </p>
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic" className="mb-3">
                View more
              </Dropdown.Toggle>
            </Dropdown>
            <span>
              Today&#39;s games <strong> NEWS</strong>
            </span>
            <Row className="d-flex align-items-center">
              <Col xs="4" id="game">
                <img src="https://gulampro.com/wp-content/uploads/2024/01/download-4.jpg" alt="" />
              </Col>
              <Col>
                <h5 id="h5">Game</h5>
                <p id="p">Incorona ogni regione</p>
              </Col>
            </Row>
          </Col>
        </> */}
        </Row>
      </Container>
    </>
  )
}

export default MyHome
