import { useRef } from "react";
import { TCard } from "../Types/Card.interface";
import Card from "./Card";

const data: TCard[] = [
  {
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    fileSize: ".9mb",
    close: true,
    tagDetails: {
      isOpen: false,
      tagTitle: "Download Now",
      tagColor: "green",
    },
  },
  {
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    fileSize: ".9mb",
    close: false,
    tagDetails: {
      isOpen: true,
      tagTitle: "Download Now",
      tagColor: "blue",
    },
  },
  {
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    fileSize: ".9mb",
    close: false,
    tagDetails: {
      isOpen: true,
      tagTitle: "Download Now",
      tagColor: "green",
    },
  },
  {
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    fileSize: ".9mb",
    close: true,
    tagDetails: {
      isOpen: false,
      tagTitle: "Download Now",
      tagColor: "green",
    },
  },
  {
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    fileSize: ".9mb",
    close: false,
    tagDetails: {
      isOpen: true,
      tagTitle: "Download Now",
      tagColor: "blue",
    },
  },
  {
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    fileSize: ".9mb",
    close: false,
    tagDetails: {
      isOpen: true,
      tagTitle: "Download Now",
      tagColor: "green",
    },
  },
  {
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    fileSize: ".9mb",
    close: true,
    tagDetails: {
      isOpen: true,
      tagTitle: "Download Now",
      tagColor: "green",
    },
  },
];

const Foreground = () => {
  const ref = useRef(null);
  return (
    <div className="p-5 fixed top-0 left-0 z-[3] w-full h-full ">
      <div ref={ref} className="flex flex-wrap gap-10">
        {data.map((item: TCard, index: number) => (
          <Card key={index} item={item} reference={ref} />
        ))}
      </div>
    </div>
  );
};

export default Foreground;
