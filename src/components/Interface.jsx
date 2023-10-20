import { motion } from "framer-motion";
import { skills } from "../config";
import Projects from "./Projects";
import { useForm, ValidationError } from "@formspree/react";

const Section = (props) => {
	const { children } = props;

	return (
		<motion.section
			className={`
    h-screen w-screen ml-5 p-8 max-w-screen-2xl mx-auto flex flex-col items-start justify-center
    `}
			initial={{ opacity: 0, scale: 0.5 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ type: "spring", stiffness: 80 }}
		>
			{children}
		</motion.section>
	);
};

export const Interface = (props) => {
	const { setSection } = props;
	return (
		<div className="-ml-7 lg:ml-0 flex flex-col items-center w-screen ">
			<HomeSection setSection={setSection} />
			<AboutSection />
			<Section>
				<Projects />
			</Section>

			<ContactSection />
		</div>
	);
};

const HomeSection = (props) => {
	const { setSection } = props;
	return (
		<Section>
			<div className="bg-white p-2 rounded-sm bg-opacity-70">
				<h1 className=" text-4xl md:text-6xl text-[#748b4b]  font-extrabold leading-snug">
					Hi, I'm
					<br />
					<span className="text-[#4e6d1c] px-1 italic">Mubarak Odetunde</span>
				</h1>
				<p className=" text-lg text-[#748b4b]">
					I love creating beautiful user experiences.
				</p>
			</div>

			<button
				onClick={() => {
					console.log("help");
					setSection(3);
				}}
				className={`bg-[#71a71a] hover:bg-[#84c51b]  text-white py-4 px-8 rounded-lg font-bold text-lg mt-16 `}
			>
				Contact Me
			</button>
		</Section>
	);
};

const AboutSection = () => {
	return (
		<Section>
			<motion.div whileInView={"visible"}>
				<div className="text-[#748b4b] flex flex-row gap-11 mt-8">
					<p>
						Name:
						<br />
						<span className="text-xl font-semibold">Mubarak</span>
					</p>
					<p>
						Age:
						<br />
						<span className="text-xl font-semibold">19</span>
					</p>
					<p>
						From:
						<br />
						<span className="text-xl font-semibold">Nigeria</span>
					</p>
				</div>
				<div className="mt-8">
					<h2 className="text-3xl md:text-5xl font-bold text-[#354719]">
						Skills
					</h2>
					<div className="mt-2 space-y-4">
						{...skills.map((skill, index) => (
							<div
								className="w-64 md:w-96 "
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
			</motion.div>
		</Section>
	);
};

const ContactSection = () => {
	const [state, handleSubmit] = useForm("xdorpbvr");

	return (
		<Section>
			<h2 className="text-3xl md:text-5xl font-bold text-[#354719]">
				Contact me
			</h2>
			<div className="mt-8 p-8 rounded-md bg-white  w-96 max-w-full">
				{state.succeeded ? (
					<p className="text-[#748b4b] text-center">
						Thank you for contacting me!
					</p>
				) : (
					<form onSubmit={handleSubmit}>
						<label
							for="name"
							className="font-medium text-[#748b4b] block mb-1"
						>
							Name:
						</label>
						<input
							type="text"
							name="name"
							id="name"
							className="bg-gray-100 p-3 block w-full rounded-md border-0 text-[#354719] shadow-sm  focus:outline-gray-300 "
						/>
						<label
							for="email"
							className="font-medium text-[#748b4b] block mb-1 mt-8"
						>
							Email:
						</label>
						<input
							type="email"
							name="email"
							id="email"
							className="bg-gray-100 p-3 block w-full rounded-md border-0 text-[#354719] shadow-sm  focus:outline-gray-300 "
						/>
						<ValidationError
							className="absolute mt-1 text-red-500"
							errors={state.errors}
						/>
						<label
							for="email"
							className="font-medium text-[#748b4b] block mb-1 mt-10"
						>
							Message:
						</label>
						<textarea
							name="message"
							id="message"
							className="bg-gray-100 p-5 h-32 block w-full rounded-md border-0 text-[#354719] shadow-sm focus:outline-gray-300 "
						/>
						<ValidationError
							className="absolute mt-1 text-red-500"
							errors={state.errors}
						/>
						<button
							disabled={state.submitting}
							className="bg-[#71a71a] text-white py-4 px-8 rounded-lg font-bold text-lg mt-16"
						>
							Submit
						</button>
					</form>
				)}
			</div>
		</Section>
	);
};
