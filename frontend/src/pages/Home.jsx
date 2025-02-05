import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import heroImg01 from '../assets/images/hero-img01.png';
import heroImg02 from '../assets/images/hero-img02.png';
import heroImg03 from '../assets/images/hero-img03.png';
import icon01 from '../assets/images/icon01.png';
import icon02 from '../assets/images/icon02.png';
import icon03 from '../assets/images/icon03.png';
import featureImg from "../assets/images/feature-img.png";
import videoIcon from "../assets/images/video-icon.png";
import avatarIcon from '../assets/images/avatar-icon.png';
import About from '../components/About/About';
import ServiceList from '../components/Services/ServiceList';
import ServiceCard from '../components/Services/ServiceCard';
import LawyerList from '../components/Lawyers/LawyerList';
import FaqList from '../components/Faq/FaqList';
import faqimg from '../assets/images/faq-img.png';
// import Testimonial from '../components/Testimonial/Testimonial';


const Home = () => {
  return (
    <>

      {/* ______________Hero Section Start___________*/}
      <section className="hero_section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800px] md:text-[60px] md:leading-[70px]">
                We facilitate legal solutions for a secure future.
                </h1>
                <p className="text_para">
                  At Lawsage, we're dedicated to empowering individuals and businesses with comprehensive legal solutions tailored to their unique needs. Our experienced team provides expert guidance and support in navigating legal challenges, ensuring peace of mind and a secure future for our clients."
                </p>
                <button className="btn">Request an Appointment</button>
              </div>
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    30+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[14px]"></span>
                  <p className="text_para">Years of Experience</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    15+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[14px]"></span>
                  <p className="text_para">Office Location</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[14px]"></span>
                  <p className="text_para">Client Satisfaction</p>
                </div>
              </div>
            </div>
            <div className="flex gap-[30px] justify-end">
              <div>
                <img src={heroImg01} alt="" />
              </div>
              <div className="mt-[30px]">
                <img src={heroImg02} alt="" className="w-full mb-[30px]" />
                <img src={heroImg03} alt="" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ______________Hero Section End___________*/}

      {/*__________About Section Start___________*/}
      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Providing the best Law services
            </h2>
            <p className="text_para text-center">
            Experience top-tier legal support with Law Sage. Our team delivers unmatched expertise and tailored solutions for your legal needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">


            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find a Lawyer
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                Access unparalleled legal support at Law Sage. Our expert team offers tailored solutions, from consultation to resolution.
                </p>
                <Link to='/doctors' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find a Location
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                Discover premier legal services at Law Sage. Our experts provide personalized assistance, ensuring your legal needs are met.
                </p>
                <Link to='/doctors' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Book Appointment
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                Secure expert guidance at Law Sage. Our team offers unmatched support, guiding you through every legal step.
                </p>
                <Link to='/doctors' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>


          </div>
        </div>
      </section>
      <About />
      {/*__________About Section End___________*/}

      {/*_______ services section start _______ */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Legal Services</h2>
            <p className="text_para text-center">
            At Law Sage, we provide unparalleled legal assistance tailored to your needs. Our firm offers expert guidance and support, ensuring exceptional service for every client.
            </p>
          </div>

          <ServiceList />
        </div>
      </section>
      {/*_______ services section end _______ */}

      {/*_______ features section start _______ */}
      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            {/* Feature content */}
            <div className="xl:w-[670px]">
              <h2 className="heading">
                Get virtual treatment <br /> anytime.
              </h2>
              <ul className="pl-4">
                <li className="text_para">
                  1. Schedule the appointment directly.
                </li>
                <li className="text_para">2. Search for your physician here, and contact their office.</li>
                <li className="text_para">3. View our physicians who are accepting new patients, use the online scheduling tool to select an appointment time.</li>
              </ul>
              <Link to="/">
                <button className="btn">Learn More</button>
              </Link>
            </div>
            {/* Feature img */}
            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img src={featureImg} className="w-3/4" alt="" />
              <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[6px] lg:gap-3">
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
                      Tue, 24
                    </p>
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]">
                      10:00AM
                    </p>
                  </div>
                  <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                    <img src={videoIcon} alt="" />
                  </span>
                </div>
              </div>
              <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-[1px] px-[2px] lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-[2px] lg:mt-[4px] rounded-full">
                Consultation
              </div>
              <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2[px] lg:mt-[18px]">
                <img src={avatarIcon} alt="" />
                <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor">
                  Deepak sharma
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*_______ features section end _______ */}

      {/*_______ our Lawyers _______ */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Lawyers</h2>
            <p className="text_para text-center">
            At Law Sage, we provide unparalleled legal assistance tailored to your needs. Our firm offers expert guidance and support, ensuring exceptional service for every client.
            </p>
          </div>
          <LawyerList />
        </div>
      </section>
      {/*_______ our Lawyers _______ */}

      {/* _______FAQ Section Start___________*/}
      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block">
              <img src={faqimg} alt="" />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="heading">
                Most questions by our beloved patients
              </h2>
              <FaqList />
            </div>
          </div>
        </div>
      </section>
      {/* _______FAQ Section Start___________*/}

      {/* _______Testimonial Section Start___________*/}

      {/* <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">What Our Patients Say</h2>
            <p className="text_para text-center">
              World-class care for everyone. Our health system offers unmatched, expert health care.
            </p>
          </div>
          <Testimonial/>
        </div>
      </section> */}

      {/* _______Testimonial Section End___________*/}

    </>
  );
}

export default Home;
