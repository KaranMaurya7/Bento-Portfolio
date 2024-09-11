import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";


export function Projects() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // State to track hover

  return (<>
		{/* Collapsed Card */}
		<motion.div
			layoutId="expandable-projects-card"
			onClick={() => setIsOpen(true)}
			onHoverStart={() => setIsHovered(true)} // Start hover
			onHoverEnd={() => setIsHovered(false)}  // End hover
			className="card cursor-pointer w-full col-span-1 h-full flex flex-col font-serif justify-between bg-fifth rounded-2xl">

			<div className="flex flex-col w-full p-4 justify-between">

			</div>

			<motion.p 
				animate={{ backgroundColor: isHovered ? "#5fa8d3" : "transparent" }} 
				transition={{ duration: 0.5 }}
				className="font-serif p-4 text-4xl rounded-b-2xl">
				Projects
			</motion.p>
			
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
					exit={{ opacity: 0 }}/>

				<motion.div
					layoutId="expandable-projects-card"
					className="expanded-projects-card fixed top-[10%] left-[13%] w-3/4 h-3/4 bg-slate-400 p-8 rounded-2xl z-10">
					
					<motion.div className="flex flex-row justify-between">
						<motion.h1 className="text-3xl font-sans font-semibold">Projects</motion.h1>
						<motion.button
							onClick={() => setIsOpen(false)}
							className=" text-blue-100 p-3">
						
							<i className="fa-solid fa-circle-xmark fa-2xl brightness-0"></i>
						</motion.button>
					</motion.div>
				</motion.div>
				</>
			)}
		</AnimatePresence>
	</>);
}