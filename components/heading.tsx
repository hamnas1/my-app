import { Children, ReactNode } from "react";

type HeadingProps = {
  children: string | JSX.Element | ReactNode ;
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
  
