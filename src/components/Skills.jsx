import React from "react";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import GitHub from "../assets/github.svg";
import Tailwind from "../assets/tailwind.png";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import Vue from "../assets/vue.png"

const Skills = () => {
	return (
		<div name="skills" className="w-full h-screen bg-[#F5F5F5] text-gray-300">
			{/* Container */}
			<div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
				<div>
					<p className="text-4xl font-bold inline border-b-4 border-[#2C5FA2] text-[#3C3C3C]">
						Skills
					</p>
					<p className="py-4 text-[#3C3C3C]">
						These are the technologies I've worked with
					</p>
				</div>

				<div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
					<div className="hover:scale-110 duration-500">
						<img className="w-20 mx-auto" src={HTML} alt="HTML Icon" />
						<p className="my-4 text-[#3C3C3C]">HTML</p>
					</div>
					<div className="hover:scale-110 duration-500">
						<img className="w-20 mx-auto" src={CSS} alt="CSS Icon" />
						<p className="my-4 text-[#3C3C3C]">CSS</p>
					</div>
					<div className="hover:scale-110 duration-500">
						<img
							className="w-20 mx-auto"
							src={JavaScript}
							alt="JavaScript Icon"
						/>
						<p className="my-4 text-[#3C3C3C]">JAVASCRIPT</p>
					</div>
					<div className="hover:scale-110 duration-500">
						<img className="w-20 mx-auto" src={ReactImg} alt="React Icon" />
						<p className="my-4 text-[#3C3C3C]">REACT</p>
					</div>
					<div className="hover:scale-110 duration-500">
						<img className="w-20 mx-auto" src={Vue} alt="React Icon" />
						<p className="my-4 text-[#3C3C3C]">VUE</p>
					</div>
					<div className="hover:scale-110 duration-500">
						<img className="w-20 mx-auto" src={GitHub} alt="GitHub Icon" />
						<p className="my-4 text-[#3C3C3C]">GITHUB</p>
					</div>
					<div className="hover:scale-110 duration-500">
						<img className="w-20 mx-auto" src={Tailwind} alt="Tailwind Icon" />
						<p className="my-4 text-[#3C3C3C]">TAILWIND</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
