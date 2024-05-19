import React from 'react'
import { Link } from 'react-router-dom';
import aboutImg from "../../assets/images/about.png";
import aboutCardImg from "../../assets/images/about-card.png";
const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
          {/* about img */}
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
            <img src={aboutImg} alt="" />
            <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
              <img src={aboutCardImg} alt="" />
            </div>
          </div>
          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className="heading">Proud to be one of the nation's best</h2>
            <p className="text_para">
            As a promising new law firm, we are proud to be recognized by India Today as one of the top emerging firms in the country. Our daily mission is to deliver exceptional legal services, focusing on innovation and our clients' success. We are dedicated to building a legacy of excellence in the legal field.
            </p>
            <p className="text_para mt-[30px]">
            We strive for excellence every day, not by dwelling on past achievements, but by focusing on what we can accomplish for our clients tomorrow. Our goal is to provide the highest quality legal services, always looking forward to new challenges and opportunities.
            </p>
            <Link to='/'>
              <button className="btn">Learn More</button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};


export default About