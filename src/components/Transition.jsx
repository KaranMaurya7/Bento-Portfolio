import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const item = { id: 1, title: "Card Title", subtitle: "Subtitle" };

export function Transition() {

  const [iOn, setiOn] = useState(false);

  return (
    <div>
      {/* Collapsed Card */}
        <motion.div
          layoutId="expandable-card"
          onClick={() => setiOn(true)}
          className="card"
          style={{
            padding: "20px",
            background: "#f0f0f0",
            borderRadius: "10px",
            width: "300px",
            margin: "100px auto",
          }}
        >
          <motion.h5>{item.subtitle}</motion.h5>
          <motion.h2>{item.title}</motion.h2>
        </motion.div>

      {/* Expanded Full-Screen Card */}
      <AnimatePresence>
        {iOn && (
          <motion.div
            layoutId="expandable-card"
            className="expanded-card"
            style={{
              position: "fixed",
              top: "10%",
              left: "10%",
              width: "80vw",
              height: "80vh",
              background: "#fff",
              padding: "30px",
              borderRadius: "20px",
              boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
              zIndex: 10,
            }}
          >
            <motion.h5>{item.subtitle}</motion.h5>
            <motion.h2>{item.title}</motion.h2>
            <motion.button
              onClick={() => setiOn(false)}
              style={{ marginTop: "20px", padding: "10px", borderRadius: "8px" }}
            >
              Close
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
