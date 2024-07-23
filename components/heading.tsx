import { Children, ReactNode } from "react";

type HeadingProps = {
  children: string | JSX.Element | ReactNode;
};

// Section Heading 64px
// size 64px
// font weight 600
// font family Roboto
// color #171717 or #ffffff

export const SectionHeading = ({ children }: HeadingProps) => {
  return (
    <span className="text-[64px] font-semibold font-roboto text-black">
      {children}
    </span>
  );
};

// Section description 16px
// size 16px
// font weight 400
// font family Roboto
// color #5f5f5f or #ffffff
export const SectionDescription = ({ children }: HeadingProps) => {
  return (
    <span className="text-[16px] font-normal font-roboto text-[#5f5f5f]">
      {children}
    </span>
  );
};

// Subheading 48px
// size 48px
// font weight 600
// font family Roboto
// color #171717 or #ffffff
export const SubHeading = ({ children }: HeadingProps) => {
  return (
    <span className="text-[48px] font-semibold font-roboto text-black">
      {children}
    </span>
  );
};

export const FooterHeading = ({ children }: HeadingProps) => {
  return (
    <span className=" font-bold font-roboto text-base  text-left text-white">
      {children}
    </span>
  );
};
export const FooterContainer = ({ children }: HeadingProps) => {
  return (
    <span className=" flex flex-col justify-start items-start gap-5 p-0 font-roboto text-white font-normal text-[16px]">
      {children}
    </span>
  );
};
export const FooterSubHeading = ({ children }: HeadingProps) => {
  return (
    <span className="  font-roboto text-sm font-normal text-left text-gray-300">
      {children}
    </span>
  );
};
export const Button = ({ children }: HeadingProps) => {
  return (
    <button className=" flex items-center  gap-3 px-6 rounded-full border border-gray-700 bg-gray-600">
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

      <span className=" flex items-center  font-roboto text-base font-normal  text-center text-white">
        {children}
      </span>
    </button>
  );
};
export const QuestionHeading = ({ children }: HeadingProps) => {
  return (
    <span className=" flex self-stretch font-roboto text-base font-semibold text-left text-gray-900 ">
      {children}
    </span>
  );
};
export const QuestionSubHeading = ({ children }: HeadingProps) => {
  return (
    <span className=" self-stretch font-roboto text-base font-normal text-left text-gray-600 ">
      {children}
    </span>
  );
};
export const QuestionContainer = ({ children }: HeadingProps) => {
  return (
    <span className=" flex flex-col justify-center items-stretch gap-6 p-6 rounded-lg border border-gray-300 bg-white">
      {children}
    </span>
  );
};
