import service from "../assets/service.png";
import visa from "../assets/visa.png";
import accomodation from "../assets/accomodation.png";
import community from "../assets/community.png";
import education from "../assets/education_loan.png";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const Service = () => {
  return (
    <div className="serviceContainer">
      <div className="serviceImg">
        <img src={service} alt="" />
      </div>
      <div className="serviceBoxOuter">
        <h2>Our Services</h2>
        <div className="serviceBoxContainer">
          <div className="serviceBox">
            <div className="serviceBoxImg">
              <img src={accomodation} alt="alt" />
            </div>
            <h4>Accomodation</h4>
            <p>
              {" "}
              <FiberManualRecordIcon className="icon" />
              20,000+ Listed Properties across 5 countries.
            </p>
            <p>
              {" "}
              <FiberManualRecordIcon className="icon" />
              100+ cities
            </p>
          </div>
          <div className="serviceBox">
            <div className="serviceBoxImg">
              <img src={visa} alt="alt" />
            </div>
            <h4>Visa Application</h4>
            <p>
              {" "}
              <FiberManualRecordIcon className="icon" />
              By Industry leading Immigration Consults.
            </p>
            <p>
              {" "}
              <FiberManualRecordIcon className="icon" />
              Quick & Hassle Free Visa Filing.
            </p>
          </div>
          <div className="serviceBox">
            <div className="serviceBoxImg">
              <img src={community} alt="alt" />
            </div>
            <h4>Centralized Community</h4>
            <p>
              <FiberManualRecordIcon className="icon" />
              Talk to international student community
            </p>
            <p>
              {" "}
              <FiberManualRecordIcon className="icon" />
              Ask your queries and doubts
            </p>
          </div>
          <div className="serviceBox">
            <div className="serviceBoxImg">
              <img src={education} alt="alt" />
            </div>
            <h4>Education Loan</h4>
            <p>
              {" "}
              <FiberManualRecordIcon className="icon" />
              100% Funding with a quick loan
            </p>
            <p>
              {" "}
              <FiberManualRecordIcon className="icon" />
              Pre-addmission
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
