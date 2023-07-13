import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
const Contact = () => {
  return (
    <div className="contactContainerOuter">
      <h2>Get in Touch with Us</h2>
      <div className="contactContainerOuterUnderline"></div>
      <p>
        Elevate Your Institute Management and Student Success - Contact us Now!
      </p>

      <div className="contactContainer">
        <div className="contactForm">
          <h2>Contact Us</h2>
          <p>
            Feel Free to contact us any time. We will get back to you as soon as
            we can!
          </p>
          <div className="contactFormDetail">
            <p>Name</p>
            <input type="text" placeholder="Doe" />
          </div>
          <div className="contactFormDetail">
            <p>Email</p>
            <input type="email" placeholder="Email" />
          </div>
          <div className="contactFormDetail">
            <p>Message</p>
            <textarea name="" id="" cols="30" rows="5" placeholder="Write your message..."></textarea>
          </div>
        </div>
        <div className="contactBar">
          <div className="contactBarInfo">
            <h3>Contact Information</h3>
            <p>
              <span>
                <PhoneInTalkIcon />
              </span>
              +1012 3456 789
            </p>
            <p>
              <span>
                <MarkunreadIcon />
              </span>
              demo@gmail.com
            </p>
            <p>
              <span>
                <LocationOnIcon />
              </span>
              132 Dartmouth Street Boston, Massachusetts 02156 United States
            </p>
          </div>
          <div className="contactBarSocial">
            <div>
              <TwitterIcon />
            </div>
            <div>
              <InstagramIcon />
            </div>
            <div>
              <FacebookOutlinedIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
