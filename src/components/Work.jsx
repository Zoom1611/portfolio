import React from "react";
import corona from "../assets/corona.jpg";
import notes from "../assets/notes.png";
import chat from "../assets/chat.jpg";
import calculator from "../assets/calculator.png";
import weather from "../assets/weather.jpg";
import rockPaperScissors from "../assets/rockPaperScissors.png";

const Work = () => {
	return (
		<div name="work" className="w-full md:h-screen text-gray-300 bg-[#E3E3E3]">
			<div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 border-[#2C5FA2] text-[#3C3C3C]">
						Work
					</p>
					<p className="py-6 text-[#3C3C3C]">
						Check out some of my recent work
					</p>
				</div>

				{/* Container */}
				<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
					{/*Grid Item*/}
					<div
						style={{ backgroundImage: `url(${corona})` }}
						className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* Hover Effect */}
						<div className="opacity-0 group-hover:opacity-100 text-center">
							<span className="text-2xl font-bold text-white tracking-wider ">
								Covid
							</span>
							<div className="pt-8 text-center">
								<a href="https://zoom-covid19.netlify.app/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Demo
									</button>
								</a>
								<a href="https://github.com/Zoom1611/covid19">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>

					<div
						style={{ backgroundImage: `url(${notes})` }}
						className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* Hover Effect */}
						<div className="opacity-0 group-hover:opacity-100 text-center">
							<span className="text-2xl font-bold text-white tracking-wider">
								Notes
							</span>
							<div className="pt-8 text-center">
								<a href="https://zoom-notify.netlify.app/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Demo
									</button>
								</a>
								<a href="https://github.com/Zoom1611/notify">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					<div
						style={{ backgroundImage: `url(${chat})` }}
						className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* Hover Effect */}
						<div className="opacity-0 group-hover:opacity-100 text-center">
							<span className="text-2xl font-bold text-white tracking-wider">
								Chat
							</span>
							<div className="pt-8 text-center">
								<a href="https://zoom-chat-app.netlify.app/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Demo
									</button>
								</a>
								<a href="https://github.com/Zoom1611/seminarski-rad-chat-app">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>

					<div
						style={{ backgroundImage: `url(${weather})` }}
						className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* Hover Effect */}
						<div className="opacity-0 group-hover:opacity-100 text-center">
							<span className="text-2xl font-bold text-white tracking-wider">
								Weather
							</span>
							<div className="pt-8 text-center">
								<a href="https://zoom-weather.netlify.app/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Demo
									</button>
								</a>
								<a href="https://github.com/Zoom1611/weather">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					<div
						style={{ backgroundImage: `url(${calculator})` }}
						className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* Hover Effect */}
						<div className="opacity-0 group-hover:opacity-100 text-center">
							<span className="text-2xl font-bold text-white tracking-wider">
								Calculator
							</span>
							<div className="pt-8 text-center">
								<a href="https://zoom-calculator.netlify.app/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Demo
									</button>
								</a>
								<a href="https://github.com/Zoom1611/calculator">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>

					<div
						style={{ backgroundImage: `url(${rockPaperScissors})` }}
						className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* Hover Effect */}
						<div className="opacity-0 group-hover:opacity-100 text-center">
							<span className="text-2xl font-bold text-white tracking-wider">
								Rock Paper Scissors
							</span>
							<div className="pt-8 text-center">
								<a href="https://zoom1611-rock-paper-scissors.netlify.app/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Demo
									</button>
								</a>
								<a href="https://github.com/Zoom1611/rock-paper-scissors">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Work;
