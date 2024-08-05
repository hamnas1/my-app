import svgimage from "@/app/nice.svg";
import Image from "next/image";
import { SectionDescription } from "../heading";

export const Hero = () => {

  return (
    <div className="container pb-6">
      <div className="pt-16" />
      <div className=" flex flex-col relative">
      <div className="absolute w-full h-[500px]">
      <div className="relative inset-0 flex flex-col md:flex-row justify-between items-center">
      <div className="w-[300px] h-[271.1px] bg-[#2279fc] -z-10 filter blur-[300px] 
                      mb-4 md:mb-0 md:w-[300px] md:h-[271.1px] md:relative md:left-0 md:bottom-0">
        {" "}
      </div>
      <div className="w-[300px] h-[271.1px] bg-[#fea520] -z-10 filter blur-[300px] 
                      mb-4 md:mb-0 md:w-[300px] md:h-[271.1px] md:relative md:right-0 md:bottom-0 
                      sm:absolute sm:right-0 sm:bottom-0"></div>

        </div>
      </div>
        <div className=" flex flex-col md:flex-row">
          <div className=" flex-1">
            <Heading />
          </div>
          <div className="flex-1"></div>
        </div>
        <div className=" flex flex-col md:flex-row">
          <div className="flex-1 pt-4"></div>
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