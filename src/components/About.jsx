import React from "react";

const About = () => {
	return (
		<div name="about" className="w-full h-screen bg-[#E3E3E3] text-gray-300">
			<div className="flex flex-col justify-center items-center w-full h-full">
				<div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
					<div className="sm:text-right pb-8 pl-4">
						<p className="text-4xl font-bold inline border-b-4 border-[#2C5FA2] text-[#3C3C3C]">
							About
						</p>
					</div>
				</div>
				<div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
					<div className="sm:text-right text-4xl font-bold text-[#3C3C3C]">
						<p>Hi, I'm Ivan, nice to meet you. Please take a look around.</p>
					</div>
					<div>
						<p className="text-[#3C3C3C]">
							I gained basic knowledge in the field of Frontend development
							(HTML, CSS, SCSS, JavaScript, GIT and React JS). I used various
							other aids in creating application. Authoring applications of mine
							are visible on my GitHub profile and in the Work section. I
							successfully defended my dissertation in January 2022 at Open
							University of Algebra. Also, I worked on my knowledge of ReactJS
							through the course Modern React with Redux by lecturer Stephen
							Grider via Udemy program. I have no experience in this field, but
							I am willing to learn and make progress.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
