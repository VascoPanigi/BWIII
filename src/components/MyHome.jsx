import { Col, Container, Dropdown, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import img from "../assets/img/img1.jpg";
import { useEffect } from "react";
import { fetchAllPosts } from "../redux/actions";
import MyPost from "./MyPost";

const MyHome = () => {
  const AllPosts = useSelector((state) => state.posts.posts);
  const userData = useSelector((state) => state.user.user_info);
 
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllPosts());
  }, []);
  return (
    <Container fluid className="container-home">
      <Row className="d-flex justify-content-center gap-3">
        <Col xs="4" lg="2">
          <Row className="d-flex flex-column pb-3 mb-2 side-bar border  ">
            <Col className="d-flex flex-column align-items-center">
              <img src={img} alt="" />
              <img className="profile" src={userData.image} alt="" />
              <h4 className="mt-4">{userData.name} {userData.surname}</h4>
              <p className="mb-1">{userData.bio} </p>
            </Col>
            <Col className="d-flex flex-column  justify-content-center ">
              <p className="mt-2 pt-3 d-flex justify-content-between ps-2 pe-2 par">
                Visitatori del profilo <span className="text-primary">61</span>
              </p>
              <p className="m-0 d-flex justify-content-between ps-2 pe-2">
                Collegamenti <span className="text-primary">51</span>
              </p>
              <h6 className="ps-2 pe-2 ">espandi la tua rete</h6>
            </Col>
            <Col>
              <p className="par ps-2 pe-2 m-0">
                Raggiungi i tuoi obbiettivi di carriera
              </p>
              <div className="d-flex align-items-center">
                <img
                  className="icon"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz1uSNb8MRNoJOfbeOEjRrH07jRDqYscBYMKA03KY-a4tc34sj"
                  alt=""
                />
                <h6 className="pe-2">Da non perdere: Premium per 0 EUR</h6>
              </div>
              <div className="d-flex align-items-center">
                <i className="bi bi-bookmark-fill ps-1"></i>

                <h6 className="ps-1 pe-2">Elementi salvati</h6>
              </div>
            </Col>
          </Row>

          <Row className="border ">
            <Col>
              <a className="d-block" href="#">
                Gruppi
              </a>
              <div className="d-flex justify-content-between align-items-center  pe-2">
                <a className="d-block" href="#">
                  Eventi
                </a>
                <i className="bi bi-plus text-black fs-4"></i>
              </div>

              <a className="d-block" href="#">
                Hashtag seguiti
              </a>

              <p className="par">Scopri di più</p>
            </Col>
          </Row>
        </Col>

        <>
          <Col xs="5">
            <Row className="border">
              <Col>
                <Row>
                  <Col xs={1}>
                   { userData&&<img className="profile" src={userData.image} alt="" />}
                  </Col>
                  <Col xs={11}>
                    <input type="text" placeholder="  Avvia un post" />
                  </Col>
                </Row>

                <Row>
                  <Col xs="5">
                    <i className="bi bi-card-image img"></i>
                    <p className="d-inline">Contenuti multimediali</p>
                  </Col>
                  <Col xs="3">
                    <i className="bi bi-calendar3 calendar"></i>
                    <p className="d-inline">Evento</p>
                  </Col>
                  <Col xs="4">
                    <i className="bi bi-list-columns-reverse list"></i>
                    <p className="d-inline">Scrivi un articolo</p>
                  </Col>
                </Row>
              </Col>
            </Row>

            {/* <Row className="border ">
           
            </Row> */}
              <MyPost />
          </Col>
        </>
        <>
          <Col className="side-bar border border-side" xs="none" lg="3">
            <h5>LinkedIn Notizie</h5>
            <span>Storie principali</span>
            <p>
              Priorità sostenibilità per la Gen Z
              <span className="d-block">1 giorno fa • 2.319 lettori</span>
            </p>
            <p>
              Dove sventolano le bandiere blu
              <span className="d-block">20 ore fa • 249 lettori</span>
            </p>
            <p>
              Scalapay e Deutsche Bank uniscono le forze
              <span className="d-block">5 giorni fa • 876 lettori</span>
            </p>
            <p>
              Come nasce un punto vendita automatizzato
              <span className="d-block">22 ore fa • 280 lettori</span>
            </p>
            <p>
              Alle smart city mancano tecnici
              <span className="d-block">1 giorno fa • 323 lettori</span>
            </p>
            <Dropdown>
              <Dropdown.Toggle
                variant="light"
                id="dropdown-basic"
                className="mb-3"
              >
                Vedi Altro
              </Dropdown.Toggle>
            </Dropdown>
            <span>
              I giochi di oggi <strong> NOVITÀ</strong>
            </span>
            <Row className="d-flex align-items-center">
              <Col xs="4" id="game">
                <img
                  src="data:image/jpeg;base64,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"
                  alt=""
                />
              </Col>
              <Col>
                <h5 id="h5">Game</h5>
                <p id="p">Incorona ogni regione</p>
              </Col>
            </Row>
          </Col>
        </>
      </Row>
    </Container>
  );
};
export default MyHome;
