import Tilt from "react-parallax-tilt";
import { useNavigate } from "react-router-dom";

import { toastError, toastSuccess } from "../../utils/toast";
import { motion } from "../../utils/motion";
import { transition } from "../../config/transition.config";

import windah_bye from "../../assets/img/windah/windah_bye.jpeg";
import sand_dark from "../../assets/sand-dark.jpg";

const styles = {
  card: {
    backdropFilter: " blur(0px) saturate(180%)",
    WebkitBackdropFilter: "blur(16px) saturate(180%)",
    backgroundColor: "rgba(166, 166, 166, 0.6)",
    borderRadius: "12px",
    border: "1px solid rgba(255, 255, 255, 0.125)",
  },
};

export const ComingSoon = () => {
  const navigate = useNavigate();

  function buttonMove() {
    const buttonMove = document.getElementById("btn-move");
    buttonMove.addEventListener("mouseover", function () {
      buttonMove.style.left = `${Math.ceil(Math.random() * 90)}%`;
      buttonMove.style.right = `${Math.ceil(Math.random() * 90)}%`;
      buttonMove.style.top = `${Math.ceil(Math.random() * 90)}%`;
    });
  }

  function buttonRoulette() {
    const number = Math.floor(Math.random() * 99) + 1;

    if (number === 69) {
      toastSuccess("You did it");
      navigate("/");
    } else toastError("Keep tryin' again");
  }

  return (
    <motion.section
      className="section flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition}
    >
      <img
        src={sand_dark}
        alt="sand dark"
        className="absolute w-full h-full object-cover -z-10 brightness-[.69]"
        loading="lazy"
      />
      <Tilt className="max-w-[380px] w-full" style={styles.card}>
        <motion.div className="p-4 flex flex-col items-center text-white gap-4 relative">
          <p>this page is coming soon</p>
          <img src={windah_bye} alt="windah bye" className="mb-14" />
          <button
            id="btn-move"
            onMouseEnter={buttonMove}
            onClick={buttonRoulette}
            className="w-[80px] h-[40px] absolute -bottom-1 right-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 transition-all duration-300 rounded-md font-medium bg-primary"
          >
            Home
          </button>
        </motion.div>
      </Tilt>
    </motion.section>
  );
};
