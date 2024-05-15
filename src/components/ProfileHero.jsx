import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import img from "../assets/img/img1.jpg";
import { Image } from "react-bootstrap";
import EditModal from "./EditModal";
import PicModal from "./PicModal";
import { setModalType, showModal } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const ProfileHero = () => {
  const userData = useSelector((state) => state.user);

  const userInfo = userData.user_info;
  const otherUser = userData.other_user_info;

  // console.log("BELANDI", otherUser);
  const loginStatus = useSelector((state) => state.login);

  const params = useParams();
  const id = params.dynamicValue;

  const dispatch = useDispatch();

  const modalType = useSelector((state) => state.modal.modalType);
  // console.log(modalType);

  const handleShowEditModal = () => {
    dispatch(setModalType("edit"));
    dispatch(showModal());
  };

  const handleShowPicModal = () => {
    dispatch(setModalType("pic"));
    dispatch(showModal());
  };

  return (
    <>
      <Card className="hero-section">
        <Card.Img variant="top" src={img} />

        {modalType === "edit" && <EditModal />}
        {modalType === "pic" && <PicModal />}
        <div className="invisible-slider">
          <Link onClick={handleShowPicModal}>
            {loginStatus.isLogged && id === "me" ? (
              <Image src={userInfo.image} className="propic" />
            ) : (
              <h5>
                <Image src={otherUser.image} className="propic" />
              </h5>
            )}
          </Link>
          {loginStatus.isLogged && id === "me" && (
            <div className="edit-wrapper">
              <i className="edit bi bi-pen" onClick={handleShowEditModal}></i>
            </div>
          )}
        </div>
        <Card.Body>
          <div className="d-flex align-items-start">
            <div>
              <div className="d-flex gap-2">
                {loginStatus.isLogged && id === "me" ? (
                  <h5>
                    {userInfo.name} {userInfo.surname}{" "}
                  </h5>
                ) : (
                  <h5>
                    {otherUser.name} {otherUser.surname}{" "}
                  </h5>
                )}

                {loginStatus.isLogged && id === "me" && (
                  <Button className="verify-btn">
                    <i className="bi bi-shield-check"></i>
                    Verify now
                  </Button>
                )}
              </div>
              {loginStatus.isLogged && id === "me" ? (
                <Card.Text>{userInfo.bio} </Card.Text>
              ) : (
                <Card.Text>{otherUser.bio} </Card.Text>
              )}
              <a href="">
                <h6 className="d-xl-none">University of Rome</h6>
              </a>

              {loginStatus.isLogged && id === "me" ? (
                <p>
                  {userInfo.area} • <span>Contact info</span>
                </p>
              ) : (
                <p>
                  {otherUser.area} • <span>Contact info</span>
                </p>
              )}

              <span>100 connections</span>
            </div>
            <div className="d-none d-xl-flex align-items-center gap-2 ms-auto">
              <Image
                src="https://media.licdn.com/dms/image/C510BAQF5OJVPD2RZjA/company-logo_100_100/0/1631329806779?e=1723680000&amp;v=beta&amp;t=upxQJFA3e2Dccg58oJvGGECbA7Pq_8wzUAY_rdEjDrs"
                className="uni-logo"
              />
              <a href="">
                {loginStatus.isLogged && id === "me" ? <h6>{userInfo.title}</h6> : <h6>{otherUser.title}</h6>}

                {/* <h6>{userInfo.title}</h6> */}
              </a>
            </div>
          </div>
          <div className="button-group d-flex align-items-center justify-content-start gap-1 gap-md-2">
            {loginStatus.isLogged && id === "me" ? (
              <>
                <Button>Open to</Button>
                <Button>Add profile section</Button>
                <Button>More</Button>
              </>
            ) : (
              <>
                <Button>
                  <i className="bi bi-person-plus-fill me-1"></i>Connect
                </Button>
                <Button>Message</Button>
                <Button>More</Button>
              </>
            )}
          </div>
        </Card.Body>
      </Card>
    </>
  );
};
export default ProfileHero;
