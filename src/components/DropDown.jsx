import { useState } from "react";

const DropDown = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="w-full border  cursor-pointer">
        <h3
          className="flex bg-orange-100 p-4  items-center gap-2 font-semibold"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img
            src="/downarrowicon.png"
            className={`w-5 ${isOpen ? "rotate-180" : ""}`}
          />
          Week {data.week}-{data.topic}
        </h3>
        {isOpen && <p className="bg-gray-50 leading-5 tracking-wide text-black p-4  border">{data.content}</p>}
      </div>
    </>
  );
};

export default DropDown;
