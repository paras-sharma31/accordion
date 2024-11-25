import { useState } from "react";
import SideImages from "./sideImages";
import Tab from "./Tab";

export default function Accordion() {
  const [isOpen, setIsOen] = useState(false);
  const [accordion, setAccordition] = useState(0);

  const handleAccordion = (value: number) => {
    setAccordition(accordion === value ? 0 : value);
    setIsOen(true);
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h2 className="text-center text-[35px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio <br />{" "}
        blanditiis
      </h2>
      <div className="w-[70%] flex gap-5 mt-10">
        <SideImages accordion={accordion} />
        <Tab
          accordion={accordion}
          handleAccordion={handleAccordion}
          isOpen={isOpen}
        />
      </div>
    </div>
  );
}
