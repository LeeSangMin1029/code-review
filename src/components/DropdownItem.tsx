"use client";

type DropdownItemProps = {
  data: string;
};

const DropdownItem = ({ data }: DropdownItemProps) => {
  return (
    <li className="bg-white font-normal p-3 hover:bg-neutral-200">{data}</li>
  );
};
export default DropdownItem;
