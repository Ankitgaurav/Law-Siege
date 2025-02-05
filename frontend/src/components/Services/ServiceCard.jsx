import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
const ServiceCard = ({ item, index }) => {
  const { name, desc, bgColor, textColor } = item;

  return (
    <div className={`py-[30px] px-3 lg:px-5 ${bgColor}`}>
      <h2 className={`text-[26px] leading-9 font-bold ${textColor}`}>
        {name}
      </h2>
      <p className={`text-[16px] leading-7 ${textColor} mt-4`}>
        {desc}
      </p>
      <div className="flex items-center justify-between mt-[30px]">
        <Link to='/Lawyers' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] flex items-center justify-center group hover:bg-primaryColor hover:border-none">
          <BsArrowRight className="group-hover:text-white w-6 h-5" />
        </Link>
        <span
          className="w-[44px] h-[px44px] flex items-center justify-center text-[18px] leading-[30px] font-[600]"
          style={{
            background: bgColor,
            color: textColor,
            borderRadius: '3px 0 0 3px',
          }}
        >
          {index + 1}
        </span>


      </div>
    </div>
  );
};

export default ServiceCard;
