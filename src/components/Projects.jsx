import { projects } from "../config";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { AiOutlineLink, AiFillGithub } from "react-icons/ai";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <div className="relative h-full w-full">
      <div className="flex flex-col gap-12">
        <h2 className="text-4xl md:text-5xl font-bold text-[#354719] mt-8">
          Projects
        </h2>
        <div className="relative w-full h-[600px] rounded-2xl p-12 mx-auto shadow-xl">
          <div className="w-max mt-12">
            {projects.map((project, index) => {
              const position =
                (index - currentSlide + projects.length) % projects.length;

              return (
                <div
                  key={index}
                  className={`absolute overflow-hidden z-10 rounded-2xl bg-fit inline-block transition-all bg-cover shadow-xl ${
                    position === 0
                      ? "top-0 left-0 translate-x-0 translate-y-0 h-full w-full"
                      : "w-[200px] h-[300px] top-1/2 -translate-y-1/2 z-20"
                  } ${position === 1 ? "hidden" : ""} ${
                    position === 1 ? "z-20" : ""
                  } ${position === 2 ? "left-1/2" : ""} ${
                    position === 3 ? "left-[calc(50%+220px)]" : ""
                  } ${position === 4 ? "left-[calc(50%+440px)] " : ""} ${
                    position >= 5 ? "left-[calc(50%+660px)]" : ""
                  }`}
                >
                  <div
                    className={`absolute inset-0 bg-cover bg-center ${
                      position === 0 ? "blur-3xl" : "blur-none"
                    }`}
                    style={{
                      backgroundImage:
                        position === 0 || position === 1 || position === 2
                          ? `url(${projects[currentSlide].image})`
                          : `url(${project.image})`,
                    }}
                  />
                  <div
                    className={`pt-8 md:pt-16 pl-10 transition-all ${
                      position === 0 ? "block" : "hidden"
                    }`}
                  >
                    <div className="w-32 md:w-64 h-max text-[#83a34f] text-left absolute z-50">
                      <p className="text-2xl font-black">
                        {projects[currentSlide].title}
                      </p>
                      <p className="mt-5 text-lg font-bold">
                        {projects[currentSlide].description}
                      </p>
                      <p className="mt-5 gap-x-16 gap-y-5 grid grid-cols-1 md:grid-cols-2">
                        {projects[currentSlide].requiredSkills.map(
                          (skill, index) => (
                            <div
                              className="w-44 md:w-32 flex flex-col"
                              key={index}
                            >
                              <motion.h3
                                className="text-sm md:text-xl font-bold text-[#69863b]"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{
                                  duration: 1,
                                  delay: 0.2 + index * 0.2,
                                }}
                              >
                                {skill.title}
                              </motion.h3>

                              <div className="h-2 w-2/3 md:w-full bg-white rounded-full mt-0 md:mt-2">
                                <motion.div
                                  className="h-full bg-[#71a71a] rounded-full border-solid border-2 "
                                  style={{ width: `${skill.level}%` }}
                                  initial={{ scaleX: 0, originX: 0 }}
                                  whileInView={{ scaleX: 1 }}
                                  transition={{
                                    duration: 1,
                                    delay: 0.35 + index * 0.2,
                                  }}
                                />
                              </div>
                            </div>
                          )
                        )}
                      </p>
                      <p className="">
                        <div className="space-x-4">
                          <a
                            href={projects[currentSlide].demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <button
                              className={`bg-[#6d8a41] hover:bg-[#394b1e] p-3 rounded-full font-bold text-lg mt-4 ${
                                !projects[currentSlide].demoUrl
                                  ? "cursor-not-allowed"
                                  : ""
                              }`}
                              disabled={!projects[currentSlide].demoUrl}
                            >
                              <AiOutlineLink color="white" />
                            </button>
                          </a>
                          <a
                            href={projects[currentSlide].gitUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <button
                              className={`bg-[#6d8a41] hover:bg-[#394b1e] p-3 rounded-full font-bold text-lg mt-4 ${
                                !projects[currentSlide].gitUrl
                                  ? "cursor-not-allowed"
                                  : ""
                              }`}
                              disabled={!projects[currentSlide].gitUrl}
                            >
                              <AiFillGithub color="white" />
                            </button>
                          </a>
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="absolute bottom-8 z-30 text-center w-full flex gap-4">
              <button>
                <GrFormPrevious
                  className="w-9 h-9 rounded-full bg-[#a1af8b] transition-all"
                  onClick={handlePrev}
                />
              </button>
              <button>
                <GrFormNext
                  className="w-9 h-9 rounded-full bg-[#a1af8b]"
                  onClick={handleNext}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
