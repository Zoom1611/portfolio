import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
	return (
		<div name="home" className="bg-[#F5F5F5] w-full h-screen">
			{/* COntainer */}
			<div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
				<p className="text-[#2C5FA2]">Hi, my name is</p>
				<h1 className="text-4xl sm:text-7xl font-bold text-[#3C3C3C]">
					Ivan Razum
				</h1>
				<h2 className="text-4xl sm:text-7xl text-[#3C3C2A]">
					Front-end developer
				</h2>
				<p className="text-[#3C3C3C] py-4 max-w-[700px]">
					I'm ambitious and hardworking front-end developer with two years of
					experience in HTML, CSS, JavaScript, VueJS and ReactJS. Still learning
					and deepening knowledge of various front-end technologies.
				</p>
				<div>
					<Link to="work" smooth={true} duration={500}>
						<button className="text-[#2C5FA2] border-[#2C5FA2] group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#2C5FA2] hover:text-white">
							View Work
							<span className="group-hover:rotate-90 duration-300">
								<HiArrowNarrowRight className="ml-3" />
							</span>
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Home;
