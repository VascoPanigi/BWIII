import { Container, Row, Col, Card, Button, Image } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import JobCard from "./JobCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllJobs } from "../redux/actions";

// import interviewicon from "../assets/icons/interviewprep.svg";

const MyJobs = () => {
  const dispatch = useDispatch();
  const allJobs = useSelector((state) => state.jobs.jobs);
  console.log(allJobs);

  useEffect(() => {
    dispatch(fetchAllJobs());
  }, []);

  return (
    <div className="background">
      <Container>
        <Row className="gap-2">
          <Col xs={12} className="d-md-none px-2">
            <Card>
              <div className="d-flex justify-content-between">
                <div className="align-content-center p-3">
                  <i className="bi bi-bookmark-fill me-2"></i>
                  <span>My Jobs</span>
                </div>
                <Dropdown className="p-3">
                  <Dropdown.Toggle variant="transparent" id="dropdown-basic">
                    More
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">
                      <i className="bi bi-list-task me-2"></i> Preferences
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      {" "}
                      <i className="bi bi-file-earmark-fill me-2"></i> Interview prep
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      <i className="bi bi-youtube me-2"></i> Job seeker guidance
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4" className="text-primary">
                      <i className="bi bi-pencil-square me-2"></i> Post a free job
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </Card>
          </Col>
          <Col xs={12} md={4} xl={3} className="p-0 d-none d-md-block">
            <Card>
              <ul className="left-column-list m-0 py-2 ">
                <li className="align-content-center">
                  <i className="bi bi-bookmark-fill"></i>
                  <span> My Jobs</span>
                </li>
                <li className="align-content-center">
                  <i className="bi bi-list-task"></i> <span>Preferences</span>
                </li>
                <li className="align-content-center">
                  <i className="bi bi-file-earmark-fill"></i> <span>Interview prep</span>
                </li>
                <li className="align-content-center">
                  <i className="bi bi-youtube"></i> <span>Job seeker guidance</span>
                </li>
              </ul>
            </Card>
            <div className="text-center">
              <Button className="post-job-button">
                <i className="bi bi-pencil-square me-2"></i>Post a free job
              </Button>
            </div>
          </Col>
          <Col xs={12} md={7} xl={5} className="px-2">
            <Card className="p-3">
              <div className="d-flex justify-content-between">
                <h5>Suggested job searches</h5>
                <i className="bi bi-x-lg close-icon align-content-center"></i>
              </div>
              <div>
                <span className="suggested-search">
                  <i className="bi bi-search"></i> marketing manager
                </span>
                <span className="suggested-search">
                  <i className="bi bi-search"></i> hr
                </span>
                <span className="suggested-search">
                  <i className="bi bi-search"></i> legal
                </span>
                <span className="suggested-search">
                  <i className="bi bi-search"></i> sales
                </span>
                <span className="suggested-search">
                  <i className="bi bi-search"></i> amazon
                </span>
              </div>
            </Card>
            <Card className="premium-card">
              <div className="d-flex p-3">
                <Image className="propic" src="https://i.imgur.com/xVjuPOt.png" />
                <div>
                  <h5>See the full list of jobs where you&apos;d be a top applicant</h5>
                  <div>
                    <Image src="https://i.imgur.com/ZxLQgHE.png" /> <span>Millions of members use Premium</span>
                  </div>

                  <Button className="premium-button btn-warning">Try Premium for €0</Button>
                  <div>
                    <span>1-month free trial. We&apos;ll send you a reminder 7 days before your trial ends.</span>
                  </div>
                </div>
              </div>
            </Card>
            <Card className=" mt-3">
              <div className=" px-3 pt-3">
                <h5 className="m-0">Hiring in your network</h5>
                <span className="grey-text fs-14">Explore relevant jobs in your network</span>
              </div>

              {allJobs && allJobs.slice(0, 20).map((job) => <JobCard key={job._id} job={job} />)}

              {/* <div className="d-flex justify-content-between mt-3 mb-1 pb-2 mx-3 job-offer-card">
                <div className="d-flex">
                  <Image
                    className="company-logo"
                    src="https://media.licdn.com/dms/image/C560BAQHT5I-04e3BpQ/company-logo_100_100/0/1631382249638?e=1723680000&v=beta&t=7D63Dy7Bldr4-8tpLuqe5t9sNXGo4Sp3uGrxVYLeAgI"
                  />
                  <div className="ps-3">
                    <div className="d-flex w-100 justify-content-between">
                      <h6 className="role-name m-0">JUNIOR SOFTWARE DEVELOPER</h6>
                    </div>
                    <h6 className="fw-normal m-0 fs-14">UMANA SPA</h6>
                    <div>
                      <span className="grey-text fs-14">Reggio Emilia, Emilia-Romagna, Italy</span>
                    </div>
                    <span className="mutual-connection grey-text fs-12">1 mutual connection with the hiring team</span>
                    <div className="fs-12">
                      <span className="grey-text">Promoted •</span> <i className="bi bi-linkedin inicon"></i>
                      <span className="grey-text"> Easy Apply </span>
                    </div>
                  </div>
                </div>
                <div>
                  <i className="bi bi-x-lg close-icon close-icon2 align-content-center"></i>
                </div>
              </div>
              <div className="d-flex justify-content-between mt-3 mb-1 pb-2 mx-3 job-offer-card">
                <div className="d-flex">
                  <Image
                    className="company-logo"
                    src="https://media.licdn.com/dms/image/C560BAQHT5I-04e3BpQ/company-logo_100_100/0/1631382249638?e=1723680000&v=beta&t=7D63Dy7Bldr4-8tpLuqe5t9sNXGo4Sp3uGrxVYLeAgI"
                  />
                  <div className="ps-3">
                    <div className="d-flex w-100 justify-content-between">
                      <h6 className="role-name m-0">JUNIOR SOFTWARE DEVELOPER</h6>
                    </div>
                    <h6 className="fw-normal m-0 fs-14">UMANA SPA</h6>
                    <div>
                      <span className="grey-text fs-14">Reggio Emilia, Emilia-Romagna, Italy</span>
                    </div>
                    <span className="mutual-connection grey-text fs-12">1 mutual connection with the hiring team</span>
                    <div className="fs-12">
                      <span className="grey-text">Promoted •</span> <i className="bi bi-linkedin inicon"></i>
                      <span className="grey-text"> Easy Apply </span>
                    </div>
                  </div>
                </div>
                <div>
                  <i className="bi bi-x-lg close-icon close-icon2 align-content-center"></i>
                </div>
              </div> */}
              <h6 className="show-all-projects text-center border-top m-0 py-3">
                Show all <i className="bi bi-arrow-right ms-2"></i>
              </h6>
            </Card>
            <Card className="p-3 mt-3">
              <h5>Top job picks for you</h5>
              <span className="grey-text pb-3">Based on your profile search history</span>
              <div className="text-center">
                <Image src="https://i.imgur.com/daD8EbP.png" />
                <h5>Want more jobs?</h5>
                <p className="grey-text">Click here to continue searching over 20 million jobs on LinkedIn</p>
                <Button className="search-jobs-button">Search jobs</Button>
              </div>
            </Card>
          </Col>
          <Col xs={12} xl={3} className="d-none d-xl-block p-0">
            <Card className="py-3">
              <div className="px-3 py-2">
                <h6 className="m-0">Job seeker guidance</h6>
                <span className="grey-text fs-12">Recommended based on your activity</span>
              </div>
              <div className="d-flex right-banner-container px-3 py-2  align-items-center justify-content-between">
                <span className="fw-bold fs-14">I want to improve my resume</span>
                <Image
                  className="jobs-right-img"
                  src="https://www.linkedin.com/dms/prv/image/C4D0DAQFdDVwn9b17iA/learning-public-crop_60_100/0/1568251157263?m=AQJM_lCwLyTTawAAAY-Amn1Tpe6eYMvjW5PUuK1EUQdFI85gFJzKcBbFLA&e=1715935959&v=beta&t=7nYqM0fP6l-Cb2-Sv4OFTm2YFnO7C95B0__-FdJuF8c"
                />
              </div>
              <div className="px-3 py-2 fs-14">
                <p>
                  Explore our curated guide of expert-led courses, such as how to improve your resume and grow your
                  network, to help you land your next opportunity.
                </p>
                <div className="d-flex show-more-link">
                  <p className="m-0">Show more</p>
                  <i className="bi bi-arrow-right ms-2"></i>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MyJobs;
