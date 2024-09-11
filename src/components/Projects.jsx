import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const projectItem = { id: 1, title: "Project Title", subtitle: "Subtitle" };

export function Projects() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Collapsed Card */}
      <motion.div
        layoutId="expandable-projects-card"
        onClick={() => setIsOpen(true)}
        className="card cursor-pointer w-full col-span-1 h-full flex flex-col font-serif justify-between bg-fifth rounded-2xl"
      >
        <div className="flex flex-row w-full p-4 justify-between">
          <p> View my <br></br>projects?</p>
          <i className="fa-solid fa-circle-right text-2xl"></i>
        </div>
        <p className="font-serif p-4 text-4xl">Projects</p>
      </motion.div>

      {/* Expanded Full-Screen Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            layoutId="expandable-projects-card"
            className="expanded-projects-card fixed top-[10%] left-[10%] w-3/4 h-3/4 bg-slate-400 p-8 rounded-2xl z-10"
          >
            <motion.h5>{projectItem.subtitle}</motion.h5>
            <motion.h2>{projectItem.title}</motion.h2>
            <motion.button
              onClick={() => setIsOpen(false)}
              className="bg-orange-950 text-blue-100 p-3"
            >
              Close
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}