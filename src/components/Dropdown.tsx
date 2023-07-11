"use client";
import { useState } from "react";
import DropdownItem from "./DropdownItem";
import { randomKey } from "@/utils";

type DropdownProps = {
  data?: any;
};

const Dropdown = ({ data }: DropdownProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const onClick = () => {
    setOpen(!open);
  };
  return (
    <div
      onClick={onClick}
      className="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 cursor-pointer"
    >
      Select Language
      {open && (
        <div className="absolute mt-7 rounded-md shadow-card ">
          <ul className="my-1 ">
            {data?.map((data: string) => (
              <DropdownItem key={randomKey()} data={data} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
export default Dropdown;
