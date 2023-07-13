import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import img from "../assets/IMG_20230712_013445.jpg";
import logo from "../assets/logo.png";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import LooksTwoRoundedIcon from "@mui/icons-material/LooksTwoRounded";
import Looks3Icon from "@mui/icons-material/Looks3";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate = useNavigate();
  const [number, setNumber] = useState("US");
  const [name, setName] = useState(false);
  const [numberData, setNumberData] = useState(false);

  const navigateFunc = () => {
    if (name && numberData) {
      console.log("navigateFunc = ()");
      navigate("/detail");
      // <Navigate to="/detail" replace={true} />;
    }
  };

  return (
    <>
      <div className="wrapper">
        <div className="heroContainer">
          <div className="heroNav">
            <img src={logo} alt="" />
          </div>
          <div className="heroInnerBox">
            <div className="heroForm">
              <div className="heroFormText">
                <h2>Start Your ILETS Preparetion</h2>
                <h2>And Get Desire Bands</h2>
                <p>
                  {" "}
                  <FiberManualRecordIcon className="icon" />
                  Get access to ILETS Centralised Library
                </p>
                <p>
                  <FiberManualRecordIcon className="icon" /> British Council
                  Certified
                </p>
              </div>
              <div className="heroFormInner">
                <div className="heroFormButtons">
                  <span>
                    {" "}
                    <CheckCircleOutlineIcon />
                    Start{" "}
                  </span>
                  <span>
                    {" "}
                    <LooksTwoRoundedIcon
                      className="icon"
                      sx={{
                        borderRadius: "30%",
                      }}
                    />
                    Fill_Detail
                  </span>
                  <span>
                    {" "}
                    <Looks3Icon className="icon" />
                    Confirm
                  </span>
                </div>
                <div className="heroFormText1">
                  <span className="textColor">Free ILETS Classes</span>
                </div>
                <div className="heroFormInput">
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="heroFormInputName"
                    onChange={() => setName(true)}
                  />
                  <PhoneInput
                    country={"us"}
                    value={number}
                    onChange={(value) => {
                      setNumber(value);
                      setNumberData(true);
                    }}
                    className="heroFormInputNumber"
                    buttonStyle={{border:"none" , marginRight:"20px"}}
                    inputStyle={{border:"none"}}
                    
                  />
                </div>
                <div className="heroFormBtn" onClick={navigateFunc}>
                  Continue
                </div>
                <div className="heroFormtext2">
                  By continuing, you agree to our Term of service & Privacy
                  policy
                </div>
              </div>
            </div>
            <div className="heroImg">
              <img src={img} alt="" />
            </div>
          </div>
          <div className="heroSmallBoxContainer">
            <div className="heroSmallBox">
              <div className="heroSmallBoxImg">
                <img src={img1} alt="img" />
              </div>
              <h3>Free ILETS Modules</h3>
              <p>20,000+ Listed Properties across 5 countries</p>
            </div>
            <div className="heroSmallBox">
              <div className="heroSmallBoxImg">
                <img src={img2} alt="img" />
              </div>
              <h3>Offline Classes</h3>
              <p>20,000+ Listed Properties across 5 countries</p>
            </div>
            <div className="heroSmallBox">
              <div className="heroSmallBoxImg">
                <img src={img3} alt="img" />
              </div>
              <h3>Live / Online Classes</h3>
              <p>20,000+ Listed Properties across 5 countries</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
