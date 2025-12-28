"use client";
import MyLogo from "@/components/layouts/MyLogo";
import Image from "next/image";

const loading = () => {
  return (
    <div className="w-full min-h-[96vh] flex flex-col justify-center items-center">
      <div className="animate-ping">
              <MyLogo className="w-80 h-60" />
      </div>
      <div className="mt-5">
        <progress className="progress bg-primary text-secondary w-56"></progress>
      </div>
    </div>
  );
};

export default loading;
