"use client";
import Image from "next/image";

const User = () => {
  return (
    <div className="flex flex-row justify-center items-center cursor-pointer select-none p-2 hover:bg-slate-300 active:bg-slate-400 rounded-lg">
      <Image
        src="https://yt3.ggpht.com/ytc/AOPolaSbA-74Q47sreCWsbtIqXmUqYM_Pcu8dIUyGxUqMqbkLA=s88-c-k-c0x00ffffff-no-rj-mo"
        alt="userimage"
        width={32}
        height={32}
        className="rounded-full"
      />
      <span className="ml-2">사용자 이름</span>
    </div>
  );
};

export default User;
