import React from "react";

const Contact = () => {
	return (
		<div className="w-full h-screen bg-[#F5F5F5] flex justify-center items-center p-4">
			<form
				method="POST"
				action="https://getform.io/f/0f68b2ab-9a1c-49b5-a6a9-9f6656ca6d64"
				className="flex flex-col max-w-[600px] w-full"
			>
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 border-[#2C5FA2] text-[#3C3C3C]">
						Contact
					</p>
					<p className="text-[#3C3C3C] py-4">
						Shoot me an email - ivanrazum1611@gmail.com
					</p>
				</div>
				<input
					className="p-2 bg-[#E3E3E3]"
					type="text"
					placeholder="Name"
					name="name"
				/>
				<input
					className="my-4 p-2 bg-[#E3E3E3]"
					type="email"
					placeholder="Email"
					name="email"
				/>
				<textarea
					className="bg-[#E3E3E3] p-2"
					name="message"
					rows="10"
					placeholder="Message"
				></textarea>
				<button className="text-[#2C5FA2] border-[#2C5FA2] border-2 hover:bg-[#2C5FA2] hover:text-white px-4 py-3 my-8 mx-auto flex- items-center">
					Let's Collaborate
				</button>
			</form>
		</div>
	);
};

export default Contact;
