import { motion } from "framer-motion";
import { FaRegFileAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { LuDownload } from "react-icons/lu";
import { TCard } from "../Types/Card.interface";

const Card = ({ item, reference }: { item: TCard; reference: object }) => {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.08, borderColor: "gray" }}
      dragElastic={10}
      dragMomentum={true}
      dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
      className="relative flex-shrink-0 w-60 h-72 rounded-[50px] bg-zinc-900/90 text-white px-5 py-10 overflow-hidden cursor-pointer border border-transparent duration-300"
    >
      <FaRegFileAlt size={20} />
      <p className="text-sm leading-tight mt-5 font-semibold">{item.desc}</p>
      <div className="absolute bottom-0 left-0 w-full">
        <div className="flex justify-between items-center px-8 py-3 mb-3">
          <h5>{item.fileSize}</h5>
          <span className="w-7 h-7 bg-zinc-600 rounded-full center cursor-pointer hover:bg-zinc-500 duration-300">
            {item.close ? (
              <IoClose size=".8em" color="#fff" />
            ) : (
              <LuDownload size=".8em" color="#fff" />
            )}
          </span>
        </div>
        {item.tagDetails.isOpen && (
          <div
            className={`tag w-full p-4 center`}
            style={{ backgroundColor: item.tagDetails.tagColor }}
          >
            <h3 className="text-sm font-semibold">
              {item?.tagDetails?.tagTitle}
            </h3>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
