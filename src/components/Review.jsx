import { useState } from "react";
import people from "../assets/data";
import {
  FaChevronLeft,
  FaChevronRight,
  FaQuoteRight,
  FaQuoteLeft,
} from "react-icons/fa";
import StarIcon from "@mui/icons-material/Star";
const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, image, text, id } = people[index];
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  return (
    <>
      <div className="reviewContainer">
        <div className="reviewCard">
          <div className="reviewCardInfo">
            <h4 className="author">{name}</h4>
            <p className="reviewCardInfoUnderline"></p>
            <FaQuoteLeft />
            <p className="info">
              {text} <FaQuoteRight />
            </p>

            <span>
              <StarIcon />
            </span>
            <span>
              <StarIcon />
            </span>
            <span>
              <StarIcon />
            </span>
            <span>
              <StarIcon />
            </span>
          </div>
          <div className="reviewCardImgContainer">
            <div className="reviewCardImgContainerBox">
              <img src={image} alt={name} />
            </div>
          </div>
        </div>
        <div className="speech"></div>
        <div className="reviewCardButtonContainer">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <span>0{id}</span>/0{people.length}
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default Review;
