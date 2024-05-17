import { Image } from "react-bootstrap";

import img from "../assets/img/jobsPlaceholder.jpeg";

const JobCard = ({ job }) => {
  console.log(job);
  return (
    <div className="d-flex justify-content-between mt-3 mb-1 pb-2 mx-3 job-offer-card">
      <div className="d-flex">
        <Image className="company-logo" src={img} />
        <div className="ps-3">
          <div className="d-flex w-100 justify-content-between">
            <h6 className="role-name m-0">{job.title}</h6>
          </div>
          <h6 className="fw-normal m-0 fs-14">{job.company_name}</h6>
          <div>
            <span className="grey-text fs-14">{job.candidate_required_location}</span>
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
  );
};

export default JobCard;
