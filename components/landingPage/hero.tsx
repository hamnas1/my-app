import svgimage from "@/app/nice.svg";
import Image from "next/image";
import { SectionDescription } from "../heading";

export const Hero = () => {

  return (
    <div className="container">
      <div className="pt-16" />
      <div className=" flex flex-col relative">
        <div className=" w-[300px] h-[271.1px] bg-[#2279fc] -z-10 absolute left-0 bottom-[50%] filter blur-[300px]">
          {" "}
        </div>
        <div className=" w-[300px] h-[271.1px] bg-[#fea520] -z-10 absolute right-0 bottom-[50%] filter blur-[300px]">
          {" "}
        </div>
        <div className=" flex flex-row">
          <div className=" flex-1">
            <Heading />
          </div>
          <div className=" flex-1"></div>
        </div>
        <div className=" flex flex-row">
          <div className=" flex-1"></div>
          <div className=" flex-1"> <SubHeading /></div>
        </div>
        <div className="pt-16" />
        <div className=" flex justify-center">
          <Image className=""
            src={svgimage} // Path relative to the public directory
            alt="Nice SVG"
          />
        </div>
      </div>
    </div>
  );
}

const Heading = () => {
  return (
    <span className="text-7xl font-semibold tracking-[1px]">
      Where the world learns Flutter?
    </span>
  );
}

const SubHeading = () => {
  return (
    <SectionDescription>
      <span>
        With more free Flutter tutorials than any other site{" "}
        <span className=" text-blue-600">
          100 Days of Flutter challenge
        </span>
        will help you learn app development.Join our free community-driven
        challenge to become a proficient Flutter developer.
      </span>
    </SectionDescription>
  );
}