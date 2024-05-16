import { Image } from "react-bootstrap";

const JobCard = () => {
  return (
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
    </div>
  );
};

export default JobCard;
