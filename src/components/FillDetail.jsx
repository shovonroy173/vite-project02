import  { useState } from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Looks3Icon from "@mui/icons-material/Looks3";
import { useNavigate} from "react-router-dom";

const FillDetail = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigateFunction = () => {
    if (email && password && confirmPassword) {
      if (password === confirmPassword) {
        console.log("navigateFunc = ()");
        navigate("/success");
      }
    }
  };
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
              <span>
                {" "}
                <CheckCircleOutlineIcon />
                Fill_Detail
              </span>
              <span className="icon">
                {" "}
                <Looks3Icon className="icon" />
                Confirm
              </span>
            </div>
            <div className="heroFormText1">
              <span className="textColor">Free ILETS Classes</span>
            </div>
            <div className="heroFormInput">
              <div>
                <input
                  type="text"
                  placeholder="Email"
                  className="fillDetailFormInput"
                  onChange={() => setEmail(true)}
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  required
                  className="fillDetailFormInput"
                  value={password}
                  onChange={(e) => setPassword(() => e.target.value)}
                />
              </div>

              <input
                type="password"
                placeholder="Confirm Password"
                required
                className="fillDetailFormInput"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(() => e.target.value)}
              />
            </div>
            <div className="heroFormBtn" onClick={navigateFunction}>
              Continue
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FillDetail;
