import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import mailImg  from "../assests/mail.png";
import instaImg  from "../assests/insta.png";
import linkdeinImg  from "../assests/linkdein.png";
import whatsImg  from "../assests/whatsapp.png";

const social = { 
	mail: "https://mail.google.com/mail/?view=cm&fs=1&to=karanmaurya115@gmail.com" , 
	contactNumber: "https://wa.me/+919877515489",
	linkdein: "https://in.linkedin.com/in/karan-maurya-9b6b29259", 
	insta: "https://www.instagram.com/_bugs__bunny___/"
};

export function Contact() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			{/* Collapsed Card */}
			<motion.div
				layoutId="expandable-card"
				onClick={() => setIsOpen(true)}
				className="card cursor-pointer w-full col-span-2 h-full flex flex-col font-serif justify-between bg-fifth rounded-2xl"
			>
				<div className="flex flex-row w-full p-4 justify-between">
					<p> Have some <br></br>questions?</p>
					<i className="fa-solid fa-circle-right text-2xl"></i>
				</div>
				<p className="font-serif p-4 text-4xl">Contact Me</p>
			</motion.div>

			{/* Expanded Full-Screen Card */}
			<AnimatePresence>
				{isOpen && (
					<>
						{/* Glass Blur Background */}
						<motion.div
							className="fixed top-0 left-0 w-full h-full bg-white bg-opacity-20 backdrop-blur-md z-0"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
						/>
						<motion.div
							layoutId="expandable-card"
							className="expanded-card fixed flex flex-col top-[10%] left-[13%] w-3/4 h-3/4 bg-slate-400 p-8 rounded-2xl z-10">
							
							<motion.div className="flex flex-row justify-between">
								<div>
									<motion.h1 className="text-3xl font-sans font-semibold">Contact Me</motion.h1>
									<motion.h5 className="text-lg font-sans font-semibold">Social Links</motion.h5>
								</div>
								<motion.button
									onClick={() => setIsOpen(false)}
									className=" text-blue-100 p-3">

									<i className="fa-solid fa-circle-xmark fa-2xl brightness-0"></i>
								</motion.button>
							</motion.div>

							<motion.div
								className="flex flex-col md:flex-row w-full h-full items-center justify-around overflow-x-scroll no-scrollbar">

								<div className="w-2/3 md:w-1/5 h-auto md:h-1/2 rounded-2xl p-4 flex items-center justify-center">
									<a href={social.mail} target="_blank" rel="noopener noreferrer">
										<img src={mailImg} alt="mail image" className="w-full h-auto object-cover" />
									</a>
								</div>

								<div className="w-2/3 md:w-1/5 h-auto md:h-1/2 rounded-2xl p-4 flex items-center justify-center">
									<a href={social.insta} target="_blank" rel="noopener noreferrer">
										<img src={instaImg} alt="insta image" className="w-full h-auto object-cover" />
									</a>
								</div>

								<div className="w-2/3 md:w-1/5 h-auto md:h-1/2 rounded-2xl p-4 flex items-center justify-center">
									<a href={social.linkdein} target="_blank" rel="noopener noreferrer">
										<img src={linkdeinImg} alt="LinkedIn image" className="w-full h-auto object-cover" />
									</a>
								</div>

								<div className="w-2/3 md:w-1/5 h-auto md:h-1/2 rounded-2xl p-4 flex items-center justify-center">
									<a href={social.contactNumber} target="_blank" rel="noopener noreferrer">
										<img src={whatsImg} alt="WhatsApp image" className="w-full h-auto object-cover" />
									</a>
								</div>
							</motion.div>

						</motion.div>
					</>
				)}
			</AnimatePresence>
		</>
	);
}