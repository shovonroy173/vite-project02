import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import success from "../assets/success.png";
const Success = () => {
  return (
    <div className="fillDetailContainer">
      <div className="heroInnerBox">
        <div className="heroForm">
          <div className="heroFormInner">
            <div className="heroFormButtons">
              <span className="icon">
                {" "}
                <CheckCircleOutlineIcon className="icon" />
                Start{" "}
              </span>
              <span className="icon">
                {" "}
                <CheckCircleOutlineIcon className="icon" />
                Fill_Detail
              </span>
              <span>
                {" "}
                <CheckCircleOutlineIcon />
                Confirm
              </span>
            </div>
            <div className="successInnerBox">
              <div className="successIcon">
                <img src={success} alt="" />
              </div>
              <div className="successText1">
                <h3>
                  You are <span className="textColor">wonderful</span>{" "}
                </h3>
              </div>
              <div className="successText2">
                <p>You have now registered with us.</p>
                <p>Click below to get access to Free ILETS Modules </p>
              </div>
            </div>
            <div className="heroFormBtn">Continue</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
