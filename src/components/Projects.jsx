import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { projects } from "../config";
import { AiOutlineLink, AiFillGithub } from "react-icons/ai";
import "../index.css";

import { motion } from "framer-motion";

export default function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <>
      <h2 className="text-4xl md:text-5xl font-bold text-[#354719] mt-8">
        Projects
      </h2>
      <motion.div
        className="flex items-center w-screen h-screen"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 80 }}
      >
        <>
          <div className="hidden md:hidden lg:block">
            <div className=" blur-md bg-[#a1af8b] absolute z-10 flex flex-col shadow-lg p-12 rounded-lg">
              {projects[currentSlide].requiredSkills.map((skill, index) => (
                <div
                  className="w-64 md:w-96 flex flex-col"
                  key={index}
                >
                  <motion.h3
                    className="text-lg md:text-xl font-bold text-gray-800"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 + index * 0.2 }}
                  >
                    {skill.title}
                  </motion.h3>

                  <div className="h-2 w-full bg-white rounded-full mt-2">
                    <motion.div
                      className="h-full bg-[#71a71a] rounded-full"
                      style={{ width: `${skill.level}%` }}
                      initial={{ scaleX: 0, originX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 1, delay: 0.35 + index * 0.2 }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col  bg-[#bedb93] relative z-20 border-solid border-2 border-[#bedb93] p-12 rounded-lg">
              {projects[currentSlide].requiredSkills.map((skill, index) => (
                <div
                  className="w-64 md:w-96 flex flex-col"
                  key={index}
                >
                  <motion.h3
                    className="text-lg md:text-xl font-bold text-gray-800"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 + index * 0.2 }}
                  >
                    {skill.title}
                  </motion.h3>

                  <div className="h-2 w-full bg-white rounded-full mt-2">
                    <motion.div
                      className="h-full bg-[#71a71a] rounded-full"
                      style={{ width: `${skill.level}%` }}
                      initial={{ scaleX: 0, originX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 1, delay: 0.35 + index * 0.2 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-grow flex items-center justify-center w-full">
            <Swiper
              effect={"coverflow"}
              rewind={true}
              slidesPerView={1}
              spaceBetween={5}
              loop={false}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              navigation={true}
              modules={[EffectCoverflow, Navigation]}
              className="-left-7 md:-left-10 w-[80%] lg:w-[70%] p-0 md:px-20 lg:px-24"
              onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
            >
              {projects.map((project, index) => (
                <SwiperSlide
                  key={project.title}
                  className="flex flex-col items-center justify-center text-center lg:space-y-1 mt-5 lg:mt-0 pt-5 pb-10 md:pb-10 px-5 sm:h-screen md:h-[23rem] lg:h-[80%] bg-[#abb897]"
                  setCurrentSlide={project.index}
                >
                  <div className="text-white text-3xl lg:text-6xl font-bold px-10 pb-3">
                    {project.title}
                  </div>
                  <img
                    className="self-center m-auto border-solid border-2 border-[#526635] w-[70%]"
                    src={project.image}
                    alt={project.title}
                  />{" "}
                  <div className="h-[20%] p-2">{project.description}</div>
                  <div className="space-x-4">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className={`bg-[#6d8a41] hover:bg-[#394b1e] py-4 px-8 rounded-lg font-bold text-lg mt-4 ${
                          !project.demoUrl ? "cursor-not-allowed" : ""
                        }`}
                        disabled={!project.demoUrl}
                      >
                        <AiOutlineLink color="white" />
                      </button>
                    </a>
                    <a
                      href={project.gitUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className={`bg-[#6d8a41] hover:bg-[#394b1e] py-4 px-8 rounded-lg font-bold text-lg mt-4 ${
                          !project.gitUrl ? "cursor-not-allowed" : ""
                        }`}
                        disabled={!project.gitUrl}
                      >
                        <AiFillGithub color="white" />
                      </button>
                    </a>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </>
      </motion.div>
    </>
  );
}
