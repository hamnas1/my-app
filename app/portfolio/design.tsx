import {
  SectionDescription,
  SectionHeading,
  SubHeading,
  FooterHeading,
  FooterContainer,
  FooterSubHeading,
  Button,
  QuestionHeading,
  QuestionSubHeading,
  QuestionContainer,
  HeaderHeading,
  HeaderSubHeading,
} from "@/components/heading";
import svgimage from "@/app/nice.svg";
import Image from "next/image";
export const HeaderPage = () => {
  return (
    <>
      <div className=" flex flex-row justify-between items-center mb-[72px] mt-[24px] px-[80px]">
        <div className="flex flex-row justify-start items-center gap-[12px]">
          <span className="flex-grow-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
              <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
              <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
            </svg>
          </span>
          <span className="flex-auto font-roboto text-base font-medium  text-left text-gray-700">
            100 days of Flutter
          </span>
        </div>
        <div className=" flex flex-row  items-center  gap-28">
          <HeaderHeading>About Us</HeaderHeading>
          <HeaderHeading> pricing</HeaderHeading>
          <HeaderHeading> Testimonials</HeaderHeading>
          <button className=" flex flex-row justify-center items-center gap-10 rounded-lg p-2.5 bg-blue-500">
            {" "}
            <span className=" font-roboto text-xs font-medium leading-5 text-left text-white">
              {" "}
              Join The Challenge
            </span>
          </button>
        </div>
      </div>
      <div className="grid sm:grid-cols-2">
        <span className=" row-span-2 px-[80px] font-roboto text-[72px] font-semibold leading-normal text-left text-gray-800">
          Where the world learns Flutter?
        </span>

        <div className="pt-[256px] grid sm:grid-cols-2 px-[80px]"> 
          <HeaderSubHeading>
            <span> 
              With more free Flutter tutorials than any other site{" "}
              <span className=" text-blue-600">
                100 Days of Flutter challenge
              </span>
              will help you learn app development.Join our free community-driven
              challenge to become a proficient Flutter developer.
            </span>
          </HeaderSubHeading>
        </div>
        <div className="px-[0px] circlePosition w-[300px] h-[271.1px] bg-[#2279fc] absolute z-1 right-[60%]  taranslate-x-[50%] translate-y-[100%] filter blur-[600px]  ">
          {" "}
        </div>
        <div className="px-[0px] circlePosition w-[300px] h-[271.1px] bg-[#fea520] absolute z-1 left-[75%]  taranslate-x-[50%] translate-y-[100%] filter blur-[400px]  ">
          {" "}
        </div>
      
      </div>
    
        <Image className="px-[80px] pt-[76px]"
          src={svgimage} // Path relative to the public directory
          alt="Nice SVG"
          width={1280} // Adjust as needed
          height={528} // Adjust as needed
        />
      
    </>
  );
};

export const CommunityPage = () => {
  return (
    <div className="pt-[120px] px-20 pb-[120px] ">
      <SubHeading>
        <span>
          A <span className=" text-blue-600">community</span> of passionate
          Flutter learners
        </span>
      </SubHeading>
      <div className="py-2"></div>
      <p className=" text-xl font-roboto font-normal text-[#5f5f5f] ">
        {" "}
        Our mission is to make learning Flutter accessible and fun for everyone.
        Comprehensive, interactive, and practical learning experience. Join a
        community of passionate learners, help each other grow, and build
        amazing applications together. Our mission is to make learning Flutter
        accessible and fun for everyone. Comprehensive, interactive, and
        practical learning experience. Join a community of passionate learners,
        help each other grow, and build amazing applications together.
      </p>
    </div>
  );
};

export const GeneralPage = () => {
  return (
    <div className="self-stretch grow-0 flex flex-col  gap-[72px]  px-[80px] py-[100px] bg-[#171717]">
      <div className="flex flex-col  gap-[16px] p-0">
        <span className="flex-grow-0 font-roboto text-[64px] font-semibold  text-white text-left">
          Why 100 Days Of Flutter?
        </span>
        <span className="flex-grow-0 font-roboto text-base font-normal text-white text-left">
          From Beginner to Pro in 100 Days. Learning through action and
          community building.
        </span>
      </div>
      <div className=" flex flex-col flex-auto justify-start items-stretch gap-6 ">
        <div className=" flex flex-row  flex-auto justify-center items-start gap-6 p-0">
          <span className=" flex flex-col  flex-auto justify-start items-start gap-6 p-6 rounded-lg border border-solid border-gray-800 bg-[#262626]">
            <span className=" flex flex-col justify-start items-start gap-2 p-3 rounded-lg border border-solid border-gray-800 bg-[#303030]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#1774FF"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                />
              </svg>
            </span>
            <span className=" flex-grow-0 font-roboto text-base font-normal text-left text-white">
              Free and open-source content
            </span>
          </span>
          <span className=" flex flex-col flex-auto justify-start items-start gap-6 p-6 rounded-lg border border-solid border-gray-800 bg-[#262626]">
            <span className=" flex flex-col justify-start items-start gap-2 p-3 rounded-lg border border-solid border-gray-800 bg-[#303030]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#1774FF"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
                />
              </svg>
            </span>
            <span className=" flex-grow-0 font-roboto text-base font-normal text-left text-white">
              Monthly live sessions & QnA
            </span>
          </span>
        </div>
        <div className=" flex flex-row flex-auto justify-start items-start gap-6 p-0">
          <span className=" flex flex-col  flex-auto justify-start items-start gap-6 p-6 rounded-lg border border-solid border-gray-800 bg-[#262626]">
            <span className=" flex flex-col justify-start items-start gap-2 p-3 rounded-lg border border-solid border-gray-800 bg-[#303030]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#1774FF"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                />
              </svg>
            </span>
            <span className=" flex-grow-0 font-roboto text-base font-normal text-left text-white">
              Project Based Learning
            </span>
          </span>

          <span className=" flex flex-col  flex-auto justify-start items-start gap-6 p-6 rounded-lg border border-solid border-gray-800 bg-[#262626]">
            <span className=" flex flex-col justify-start items-start gap-2 p-3 rounded-lg border border-solid border-gray-800 bg-[#303030]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#1774FF"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </span>
            <span className=" flex-grow-0 font-roboto text-base font-normal text-left text-white">
              Community Support
            </span>
          </span>

          <span className=" flex flex-col  flex-auto justify-start items-start gap-6 p-6 rounded-lg border border-solid border-gray-800 bg-[#262626]">
            <span className=" flex flex-col  justify-start items-start gap-2 p-3 rounded-lg border border-solid border-gray-800 bg-[#303030]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#1774FF"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
                />
              </svg>
            </span>
            <span className=" flex-grow-0 font-roboto text-base font-normal text-left text-white">
              Hands on coding exercise
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export const DesignPage = () => {
  const pricingList: PricingCardProps[] = [
    {
      type: "default",
      plan: "FREE",
      price: "$0",
      features: ["Learn for free", "Track your progress"],
      cta: { title: "Get Started Now" },
    },
    {
      type: "recommended",
      plan: "MONTHLY",
      price: "$24.99",
      features: [
        "Track your progress",
        "Get access to supportive community",
        "Weekly group QnAs",
        "Test assessments & certificates",
      ],
      cta: { title: "Get Started Now" },
    },
    {
      type: "default",
      plan: "YEARLY",
      price: "$50.99",
      features: [
        "Track your progress",
        "Get access to supportive community",
        "Weekly group QnAs",
        "Test assessments & certificates",
      ],
      cta: { title: "Get Started Now" },
    },
  ];

  return (
    <div className="px-20 pt-[120px]">
      <SectionHeading>Choose a plan that suits you</SectionHeading>
      <div className=" flex flex-row">
        <div className=" md:basis-1/2">
          <SectionDescription>
            Both a free trial and a free set of features for anyone who wants to
            use them. The more orders your company
          </SectionDescription>
        </div>
      </div>

      <div className=" py-8"></div>
      <div className=" flex flex-col justify-start items-start gap-[16px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingList.map((pricing, index) => (
            <PricingCard
              key={index}
              type={pricing.type}
              plan={pricing.plan}
              price={pricing.price}
              features={pricing.features}
              cta={pricing.cta}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// pricing card
// type string = "default" | "recommended";
// plan string = "FREE" | "MONTHLY" | "YEARLY";
// price string
// feature list string[]
// CTA { title string , onClick: () => void }

type PricingCardProps = {
  type: "default" | "recommended";
  plan: string;
  price: string;
  features: string[];
  cta: { title: string };
};

const PricingCard = ({
  type,
  plan,
  price,
  features,
  cta,
}: PricingCardProps) => {
  const bgColor = type === "default" ? "bg-gray-50" : "bg-gray-900";
  const textColor = type === "default" ? "text-gray-700" : "text-white";
  const buttonColor = type === "default" ? "bg-blue-100" : "bg-blue-500";
  const buttonTextColor = type === "default" ? "text-blue-500" : "text-white";

  return (
    <div
      className={` flex flex-col justify-start items-center gap-10 p-6 rounded-lg border border-gray-300 ${bgColor}`}
    >
      <div className=" flex flex-row justify-start items-center gap-2 p-2">
        <span
          className={` font-roboto text-xs font-medium leading-4 tracking-wide text-center ${textColor}`}
        >
          {plan}
        </span>
      </div>
      <span
        className={` font-roboto text-[58px] font-bold leading-[1.38] tracking-[1.16px] text-center ${textColor}`}
      >
        {price}
      </span>
      <div
        className={` font-roboto text-base font-normal leading-[2.19] tracking-normal text-center ${textColor}`}
      >
        {features.map((feature) => (
          <>
            {feature}
            <br />
          </>
        ))}
      </div>
      <button
        className={`h-12 w-full flex flex-row justify-center items-center gap-2 p-3 rounded-lg ${buttonColor}`}
      >
        <span
          className={` font-roboto text-base font-medium leading-6 text-center ${buttonTextColor}`}
        >
          {cta.title}
        </span>
      </button>
    </div>
  );
};
export const JoinCommunity = () => {
  return (
    <div className=" mt-28 flex flex-col justify-start items-stretch py-20 bg-gray-900">
      <div className=" flex flex-col justify-start items-center gap-8 px-20">
        <span className=" flex-shrink-0 font-roboto text-4xl font-medium text-center text-white">
          Join Our Community
        </span>
        <span className=" flex-shrink-0 font-roboto text-base font-normal  text-center text-white">
          Join 100 days of Flutter community today and begin your path to
          becoming a Flutter expert.
        </span>
        <div className=" flex items-center justify-center gap-6">
          <Button>Begginer friendly</Button>
          <Button>60 Min Per Day</Button>
        </div>
        <button className=" flex items-center justify-center gap-2 px-6 rounded-lg bg-blue-500">
          {" "}
          Join Now
        </button>
      </div>
    </div>
  );
};
export const QuestionPage = () => {
  return (
    <div className=" flex flex-row justify-between items-start px-[80px] pt-[120px]">
      <div className=" flex flex-col justify-start items-start gap-4 ">
        <span className="font-roboto text-[64px] font-semibold leading-normal text-left text-gray-800">
          Let us listen to your problems
        </span>
        <span className="font-roboto text-base font-normal text-left text-gray-600">
          Got Questions? We've got answers
        </span>
        <div className="px-[104.7px] circlePosition w-[200px] h-[200px] bg-[#fea520] absolute z-1 right-[80%]  taranslate-x-[50%] translate-y-[100%] filter blur-[500px]  ">
          {" "}
        </div>
      </div>

      <div className="flex flex-col justify-start items-stretch gap-6">
        <QuestionContainer>
          <QuestionHeading>
            Is the 100 days of flutter challenge free?
          </QuestionHeading>
          <QuestionSubHeading>
            Yes, all the educational content is free or at minimal cost.
          </QuestionSubHeading>
        </QuestionContainer>

        <QuestionContainer>
          <QuestionHeading>
            Do I need to pay for anything else besides Numeral to file my sales
            tax?
          </QuestionHeading>
          <QuestionSubHeading>
            There are a few states that require a registration fee; however,
            most states are free. Besides that, the only recurring charge are
            your monthly/quarterly/annual filings.
          </QuestionSubHeading>
        </QuestionContainer>

        <QuestionContainer>
          <QuestionHeading>
            Do I need to pay for anything else besides Numeral to file my sales
            tax?
          </QuestionHeading>
          <QuestionSubHeading>
            There are a few states that require a registration fee; however,
            most states are free. Besides that, the only recurring charge are
            your monthly/quarterly/annual filings.
          </QuestionSubHeading>
        </QuestionContainer>
      </div>
    </div>
  );
};

export const PageFooter = () => {
  return (
    <div className="flex flex-col justify-start items-start gap-8 mt-16 pt-[120px] sm:mt-32 p-4 lg:p-8 bg-gray-900">
      <div className="px-[80px] self-stretch flex flex-row justify-between flex-wrap items-start">
        <div className="flex flex-col justify-start items-start gap-8">
          <FooterHeading>100 days of Flutter</FooterHeading>
          <FooterSubHeading>A product of hacking with flutter</FooterSubHeading>
          <div className="flex flex-row justify-start items-start gap-6">
            <img src="img-url" alt="Image 1" />
            <img src="img-url" alt="Image 2" />
            <img src="img-url" alt="Image 3" />
            <img src="img-url" alt="Image 4" />
            <img src="img-url" alt="Image 5" />
          </div>
        </div>

        <div className="flex flex-col justify-start items-start gap-8">
          <FooterHeading>Quick Links</FooterHeading>
          <FooterContainer>
            Pricing <br />
            Get Started <br />
            About <br />
            Community
            <br />
          </FooterContainer>
        </div>

        <div className="flex flex-col justify-start items-start gap-8">
          <FooterHeading>Legal Links</FooterHeading>
          <FooterContainer>
            Privacy Policy
            <br />
            Terms of service <br />
            Refund Policy <br />
            Contact us <br />
          </FooterContainer>
        </div>

        <div className="flex flex-col justify-start items-start gap-4">
          <FooterHeading>Subscribe to Newsletter</FooterHeading>
          <div className="flex items-center justify-center">
            <div className="flex rounded-lg overflow-hidden">
              <input
                type="email"
                className="flex-grow p-4 text-gray-600"
                placeholder="Enter email address"
              />
              <button className="p-4 bg-blue-500 text-white font-medium">
                Join
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
