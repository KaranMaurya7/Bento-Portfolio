import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const item = { id: 1, title: "Card Title", subtitle: "Subtitle" };

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
							className="expanded-card fixed top-[10%] left-[13%] w-3/4 h-3/4 bg-slate-400 p-8 rounded-2xl z-10"
						>
							<motion.div className="flex flex-row justify-between">
								<motion.h1 className="text-3xl font-sans font-semibold">Contact Me</motion.h1>
								<motion.button
									onClick={() => setIsOpen(false)}
									className=" text-blue-100 p-3"
								>
									<i className="fa-solid fa-circle-xmark fa-2xl brightness-0"></i>
								</motion.button>
							</motion.div>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</>
	);
}