import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { projects } from "../config";
import { AiOutlineLink, AiFillGithub } from "react-icons/ai";
import "../index.css";

import { motion } from "framer-motion";

export default function Projects() {
  return (
    <>
      <h2 className="text-4xl md:text-5xl font-bold text-[#354719] mt-8">
        Projects
      </h2>
      <motion.div
        className="flex flex-col items-center w-screen h-screen gap-8"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 80 }}
      >
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
            className="w-full lg:w-[70%] px-7 md:px-20 lg:px-24"
          >
            {projects.map((project, index) => (
              <SwiperSlide
                key={project.title}
                className="flex flex-col items-center justify-center text-center lg:space-y-1 mt-5 lg:mt-0 pt-5 md:pb-10 px-5 sm:h-screen md:h-[23rem] lg:h-[80%] bg-[#abb897]"
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
      </motion.div>
    </>
  );
}
