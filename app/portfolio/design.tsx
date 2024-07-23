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
} from "@/components/heading";

export const CommunityPage = () => {
  return (
    <div className="px-20">
      <SubHeading>
        <span>
          A <span className=" text-blue-600">community</span> of passionate
          Flutter learners
        </span>
      </SubHeading>
      <div className="py-2"></div>
      <p className="text-xl font-roboto font-normal text-[#5f5f5f] ">
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
    <div className="px-20">
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
    <div className=" flex flex-row justify-between items-start p-32">
      <div className=" flex flex-col justify-start items-start gap-4 ">
        <span className=" font-roboto text-[64px] font-semibold leading-normal text-left text-gray-800">
          Let us listen to your problems
        </span>
        <span className="font-roboto text-base font-normal text-left text-gray-600">
          Got Questions? We've got answers
        </span>
        <div className="px-[104.7px] circlePosition w-[200px] h-[200px] bg-[#fea520] absolute z-1 right-[80%]  taranslate-x-[50%] translate-y-[100%] filter blur-[220px]  ">
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
    <div className="flex flex-col justify-start items-start gap-8 mt-16 sm:mt-32 p-4 lg:p-8 bg-gray-900">
      <div className="self-stretch flex flex-row justify-between flex-wrap items-start">
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
