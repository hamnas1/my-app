import { SubHeading } from "../heading";


export const MainCTA = () => {
  return (
    <div className=" py-20 flex flex-col justify-center items-center text-center bg-[#171717] text-white relative">
      <SubHeading color="text-white">
        Join Our Community
      </SubHeading>
      <div className="pt-4" />
      <span className="text-base">
        Join 100 days of Flutter community today and begin your path to
        becoming a Flutter expert.
      </span>
      <div className="pt-4" />
      <div className=" flex gap-6">
        <Chip>Begginer friendly</Chip>
        <Chip>60 Min Per Day</Chip>
      </div>
      <div className="py-4" />
      <button className="px-6 py-3 rounded-lg bg-[#1774ff]">
        {" "}
        Join The Challenge
      </button>
      <div className=" w-[182px] h-[142.1px] bg-[#2279fc] absolute right-[20%] filter blur-[100px]">
        {" "}
      </div>
    </div>
  );
};

const Chip = ({ children }: { children: string }) => {
  return (
    <button className="flex flex-row gap-3 px-6 py-2 rounded-full border border-[#484848] bg-[#262626]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
      <span className="text-base">
        {children}
      </span>
    </button>
  );
};