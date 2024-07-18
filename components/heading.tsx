
type HeadingProps = {
  children: string | JSX.Element;
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