import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";
import jsPDF from "jspdf";
import resume from "../assets/Resume.pdf";

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const handleClick = () => setNav(!nav);

	const pdfGenerate = () => {
		const doc = new jsPDF("landscape", "px", "a4", false);
		doc.save({ resume });
	};

	return (
		<div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
			<div>
				<b className="text-pink-600 text-2xl">IRazum</b>
			</div>

			{/* Menu */}
			<ul className="hidden md:flex">
				<li>
					<Link
						to="home"
						smooth={true}
						duration={500}
						className="hover:border-b-4 hover:border-pink-600"
					>
						Home
					</Link>
				</li>
				<li>
					<Link
						to="about"
						smooth={true}
						duration={500}
						className="hover:border-b-4 hover:border-pink-600"
					>
						About
					</Link>
				</li>
				<li>
					<Link
						to="skills"
						smooth={true}
						duration={500}
						className="hover:border-b-4 hover:border-pink-600"
					>
						Skills
					</Link>
				</li>
				<li>
					<Link
						to="work"
						smooth={true}
						duration={500}
						className="hover:border-b-4 hover:border-pink-600"
					>
						Work
					</Link>
				</li>
				<li>
					<Link
						to="contact"
						smooth={true}
						duration={500}
						className="hover:border-b-4 hover:border-pink-600"
					>
						Contact
					</Link>
				</li>
			</ul>

			{/* Hambeurger */}
			<div onClick={handleClick} className="md:hidden z-10">
				{nav ? <FaTimes /> : <FaBars />}
			</div>

			{/* Mobile Menu */}
			<ul
				className={
					nav
						? "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
						: "hidden"
				}
			>
				<li className="py-6 text-4xl">
					<Link onClick={handleClick} to="home" smooth={true} duration={500}>
						Home
					</Link>
				</li>
				<li className="py-6 text-4xl">
					<Link onClick={handleClick} to="about" smooth={true} duration={500}>
						About
					</Link>
				</li>
				<li className="py-6 text-4xl">
					<Link onClick={handleClick} to="skills" smooth={true} duration={500}>
						Skills
					</Link>
				</li>
				<li className="py-6 text-4xl">
					<Link onClick={handleClick} to="work" smooth={true} duration={500}>
						Work
					</Link>
				</li>
				<li className="py-6 text-4xl">
					<Link onClick={handleClick} to="contact" smooth={true} duration={500}>
						Contact
					</Link>
				</li>
			</ul>

			{/* Social Icons*/}
			<div className="hidden md:flex fixed flex-col top-[35%] left-0">
				<ul>
					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
						<a
							className="flex justify-between items-center w-full text-gray-300"
							href="https://www.linkedin.com/in/ivan-razum-756376233/"
						>
							LinkedIn <FaLinkedin size={30} />
						</a>
					</li>
					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
						<a
							className="flex justify-between items-center w-full text-gray-300"
							href="https://github.com/Zoom1611"
						>
							GitHub <FaGithub size={30} />
						</a>
					</li>
					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
						<a
							className="flex justify-between items-center w-full text-gray-300"
							href="mailto: ivanrazum1611@gmail.com"
						>
							Email <HiOutlineMail size={30} />
						</a>
					</li>
					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
						<button
							className="flex justify-between items-center w-full text-gray-300"
							onClick={pdfGenerate}
						>
							Resume <BsFillPersonLinesFill size={30} />
						</button>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
