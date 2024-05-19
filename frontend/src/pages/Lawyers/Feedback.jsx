import avatar from "../../assets/images/avatar-icon.png";
import { formatDate } from "../../utils/formateDate";
import { AiFillStar } from 'react-icons/ai'
import FeedbackForm from "./FeedbackForm";
import { useState } from "react";

const Feedback = () => { // Corrected the function declaration
  const[showFeedbackForm, setShowFeedbackForm] = useState(false)
  return (
    <div>
      <div className="mb-[50px]">
        <h4 className="text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]">
          All reviews (272)
        </h4>
        <div className="flex justify-between gap-10 mb-[30px]">
          <div className="flex gap-3">
            <figure className="w-10 h-10 rounded-full">
              <img className="w-full" src={avatar} alt="" /> {/* Corrected the avatar source */}
            </figure>
            <div>
              <h5 className="text-[16px] leading-6 text-primaryColor font-bold">
                Aman
              </h5>
              <p className="text-[14px] leading-6 text-textColor">
                {formatDate("02-14-2023")} {/* Corrected the formatDate function name */}
              </p>
              <p className="text_para mt-3 font-medium text-[15px]">
                Good services, highly recommended
              </p>
            </div>
          </div>
          <div className="flex gap-1">
            {[...Array(5).keys()].map((index) => ( // Corrected the map function syntax
              <AiFillStar key={index} color="#0067FF" /> // Assuming AiFillStar is imported correctly
            ))}
          </div>
        </div>
      </div>
      {!showFeedbackForm && (
        <div className="text-center">
          <button className="btn" onClick={() => setShowFeedbackForm(true)}> {/* Corrected onClick handler */}
            Give Feedback
          </button>
        </div>
      )}
      {showFeedbackForm && <FeedbackForm />} {/* Corrected the FeedbackForm condition */}
    </div>
  );
};

export default Feedback; // Added export statement at the end
