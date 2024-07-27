import { ReactNode } from "react";
import { SectionDescription, SectionHeading } from "./heading";

type SectionProps = {
  color?: "bg-[#171717]" | "bg-white",
  children: ReactNode;
};

export const Section = ({ color, children }: SectionProps) => {
  return (
    <div className={color}>
      <div className={`container py-24`}>
        {children}
      </div>
    </div>
  )
}

type SectionTitleProps = {
  heading: string;
  subheading: string;
  headingColor?: "text-[#171717]" | "text-white";
  subheadingColor?: "text-[#5f5f5f]" | "text-white";
};


export const SectionTitle = ({
  heading,
  subheading,
  headingColor = "text-[#171717]",
  subheadingColor = "text-[#5f5f5f]"
}: SectionTitleProps) => {
  return (
    <div className="flex flex-col gap-4">
      <SectionHeading color={headingColor}>
        {heading}
      </SectionHeading>
      <div className="flex flex-row">
        <div className=" md:basis-4/5">
          <SectionDescription color={subheadingColor}>
            {subheading}
          </SectionDescription>
        </div>
      </div>
    </div>
  );
}