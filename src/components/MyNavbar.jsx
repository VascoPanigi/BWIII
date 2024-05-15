import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Image } from "react-bootstrap";
import bell from "../assets/icons/bell.svg";
import grid from "../assets/icons/grid.svg";
import messaging from "../assets/icons/messaging.svg";
import network from "../assets/icons/network.svg";
import home from "../assets/icons/home.svg";
import jobs from "../assets/icons/jobs.svg";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import logo from "../assets/icons/logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProfileAction } from "../redux/actions";
import propic from "../assets/img/propic.jpeg";

const MyNavbar = () => {
  const userData = useSelector((state) => state.user);
  // console.log('nav', userData)

  const loginStatus = useSelector((state) => state.login);
  // console.log(loginStatus)

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(fetchProfileAction(loginStatus.userLoggedID));
  };

  return (
    <Navbar
      expand="lg"
      className="navbar-container bg-body-tertiary align-items-center"
    >
      <Container className="justify-content-between">
        <div className="d-flex align-items-center gap-1">
          <Navbar.Brand href="#home">
            <Image src={logo} />
          </Navbar.Brand>
          <Form>
            <Col className="p-0 d-none d-md-block">
              <div className="input-group">
                <span className="input-group-text" id="basic-addon1">
                  <i className="bi bi-search"></i>
                </span>
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                  aria-label="Search"
                  aria-describedby="basic-addon1"
                />
              </div>
            </Col>
          </Form>
        </div>
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navbar-group me-auto">
              <Link className="text-center" to={"/user/home"}>
                <Image src={home}></Image>
                <p>Home</p>
              </Link>
              <Nav.Link className="text-center" href="#rete">
                <Image src={network}></Image>
                <p>My network</p>
              </Nav.Link>
              <Nav.Link className="text-center" href="#rete">
                <Image src={jobs}></Image>
                <p>Jobs</p>
              </Nav.Link>
              <Nav.Link className="text-center" href="#messaggi">
                <Image src={messaging}></Image>
                <p>Messaging</p>
              </Nav.Link>
              <Nav.Link className="text-center" href="#notifiche">
                <Image src={bell}></Image>
                <p>Notifications</p>
              </Nav.Link>
              <div className="d-flex flex-column justify-content-end align-items-center" style={{ maxWidth: "78px" }}>
                {loginStatus.isLogged ? (
                  <Image
                    src={userData.user_info.image}
                    className="propic mx-auto"
                  />
                ) : (
                  <Image src={propic} className="propic mx-auto" />
                )}

                <NavDropdown
                  title="Me"
                  id="basic-nav-dropdown"
                  className="first-dropdown"
                  align="end"
                >
                  {loginStatus.isLogged ? (
                    <NavDropdown.Item>
                      <Link
                        to={`/user/${loginStatus.userLoggedID}`}
                        onClick={handleClick}
                      >
                        Profile
                      </Link>
                    </NavDropdown.Item>
                  ) : (
                    <NavDropdown.Item>
                      <Link to={"/login"}>Login</Link>{" "}
                    </NavDropdown.Item>
                  )}

                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
              <div className="separate d-flex flex-column justify-content-end align-items-center">
                <Image src={grid} className="mx-auto" />
                <NavDropdown
                  title="For Business"
                  id="basic-nav-dropdown"
                  className="second-dropdown"
                  align="end"
                >
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
