import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";
import { fakeUser, navPaths } from "./constants";
import Homepage from "./components/Homepage";
import Attendance from "./components/Attendance";
import HistoryPage from "./components/HistoryPage";
import Schedule from "./components/Schedule";

const animationDuration = 0.4;

export default function App() {
  const [userDetails, setUserDetails] = useState(null);
  const [url, setUrl] = useState(navPaths.HOME);
  useEffect(() => {
    setUserDetails(fakeUser);
  }, []);

  return (
    <motion.div className="container">
      <AnimatePresence>
        {url === navPaths.HOME && (
          <motion.div
            key="HOME"
            transition={{ duration: animationDuration }}
            initial={{ x: "-100%", scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0.7, x: "-100%", scale: 0.95 }}
          >
            <Homepage userDetails={userDetails} navigation={[url, setUrl]} />
          </motion.div>
        )}
        {url === navPaths.ATTENDANCE && (
          <motion.div
            key="ATTENDANCE"
            transition={{ duration: animationDuration }}
            initial={{ x: "100%", scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0.7, x: "100%", scale: 0.95 }}
          >
            <Attendance navigation={[url, setUrl]} />
          </motion.div>
        )}
        {url === navPaths.HISTORY && (
          <motion.div
            key="HISTORY"
            transition={{ duration: animationDuration }}
            initial={{ x: "100%", scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0.7, x: "100%", scale: 0.95 }}
          >
            <HistoryPage navigation={[url, setUrl]} />
          </motion.div>
        )}
        {url === navPaths.SCHEDULE && (
          <motion.div
            key="SCHEDULE"
            transition={{ duration: animationDuration }}
            initial={{ x: "100%", scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0.7, x: "100%", scale: 0.95 }}
          >
            <Schedule navigation={[url, setUrl]} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
