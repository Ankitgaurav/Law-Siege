import React from "react";
import { formatDate } from "../../utils/formateDate";

const LawyerAbout = () => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
          About
          <span className="text-irisBlueColor font-bold text-[24px] leading-9">
            Muhimbur Rahman
          </span>
        </h3>
        <p className="text_para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eius
          assumenda corrupti at fugiat ipsum odio laudantium quisquam veritatis
          consectetur velit illo ullam animi necessitatibus vero voluptatum fuga
          consequuntur, aspernatur perspiciatis adipisci. Necessitatibus et non
          sapiente sit distinctio, repellat illo totam perspiciatis, inventore
          ex assumenda odit natus cumque saepe nostrum?
        </p>
      </div>
      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Education
        </h3>
        <ul className="pt-4 md:p-5">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formatDate('08-04-2010')} - {formatDate('08-04-2012')}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                PHD in Law
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              Law University, New York.
            </p>
          </li>
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formatDate('05-05-2008')}-{formatDate('08-04-2010')}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                Master's in Legal Studies
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              Harvard Law School, Boston.
            </p>
          </li>
        </ul>
      </div>
      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold"> Experience </h3>
        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
              {formatDate("07-04-2010")} - {formatDate("08-13-2014")}
            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor"> Sr. Lawyer </p>
            <p className="text-[14px] leading-5 font-medium text-textColor"> LawSage Legal Consultancy, New York. </p>
          </li>
          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
              {formatDate("07-04-2010")} - {formatDate("08-13-2014")}
            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor"> Sr. Lawyer </p>
            <p className="text-[14px] leading-5 font-medium text-textColor"> LawSage Legal Consultancy, New York. </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LawyerAbout;
