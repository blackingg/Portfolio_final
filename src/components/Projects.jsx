import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import { projects } from "../config";

import { AiOutlineLink, AiFillGithub } from "react-icons/ai";

export default function Projects() {
	return (
		<>
			<Swiper
				effect={"coverflow"}
				rewind={true}
				slidesPerView={1}
				spaceBetween={5}
				loop={true}
				coverflowEffect={{
					rotate: 50,
					stretch: 0,
					depth: 100,
					modifier: 1,
					slideShadows: true,
				}}
				navigation={true}
				modules={[EffectCoverflow, Navigation]}
				className="mySwiper p-10  lg:w-[56rem]"
			>
				{...projects.map((project, index) => (
					<SwiperSlide
						key={project}
						className="snap-center text-center space-y-5 pt-5 pb-0 px-5 h-[30rem] bg-[#abb897]"
					>
						<h1 className="text-white text-6xl font-bold">{project.title}</h1>
						<img
							width={400}
							className="self-center m-auto"
							src={project.image}
						/>
						<div className="space-y-[-30px] ">
							<h4>{project.description}</h4>
							<div className="space-x-4">
								<a
									href={project.demoUrl}
									target="_blank"
								>
									<button
										className={`bg-[#768560] hover:bg-[#526635]  text-white py-4 px-8 rounded-lg font-bold text-lg mt-16 `}
									>
										<AiOutlineLink />
									</button>
								</a>
								<a
									href={project.gitUrl}
									target="_blank"
								>
									<button
										className={`bg-[#6d8a41] hover:bg-[#394b1e]  text-white py-4 px-8 rounded-lg font-bold text-lg mt-16 `}
									>
										<AiFillGithub />
									</button>
								</a>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
}
