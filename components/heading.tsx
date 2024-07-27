import { Children, ReactNode } from "react";

type HeadingProps = {
  color?: "text-[#171717]" | "text-[#5f5f5f]" | "text-white";
  children: string | JSX.Element | ReactNode;
};

// Section Heading 64px
// size 64px
// font weight 600
// font family Roboto
// color #171717 or #ffffff

export const SectionHeading = ({ color = "text-[#171717]", children }: HeadingProps) => {
  return (
    <span className={`text-6xl font-medium tracking-[0px] ${color}`}>
      {children}
    </span>
  );
};

// Section description 16px
// size 16px
// font weight 400
// font family Roboto
// color #5f5f5f or #ffffff
export const SectionDescription = ({ color = "text-[#5f5f5f]", children }: HeadingProps) => {
  return (
    <span className={`text-base ${color}`}>
      {children}
    </span>
  );
};

// Subheading 48px
// size 48px
// font weight 600
// font family Roboto
// color #171717 or #ffffff
export const SubHeading = ({ children, color = "text-[#171717]" }: HeadingProps) => {
  return (
    <span className={`text-5xl font-medium ${color}`}>
      {children}
    </span>
  );
};


