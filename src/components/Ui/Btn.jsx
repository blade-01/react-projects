import { IoChevronBack } from "react-icons/io5";
import { motion } from "motion/react";
import { useNavigate } from "react-router";

export default function Btn() {
  const navigate = useNavigate();
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      onClick={() => navigate(-1)}
      className="bg-sidebar-bg text-white py-2 w-24 flex justify-center gap-2.5 items-center rounded-4xl cursor-pointer"
    >
      <IoChevronBack />
      <span>Back</span>
    </motion.button>
  );
}
