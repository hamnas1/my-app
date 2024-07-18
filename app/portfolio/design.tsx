import { SectionDescription, SectionHeading, SubHeading } from "@/components/heading";

export const CommunityPage = () => {
  return (
    <div className="px-20">
      <SubHeading>
        <span>
          A {" "}
          <span className=" text-blue-600">
            community
          </span>
          {" "} of passionate Flutter learners
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
      features: ["Track your progress", "Get access to supportive community", "Weekly group QnAs", "Test assessments & certificates"],
      cta: { title: "Get Started Now" },
    },
    {
      type: "default",
      plan: "YEARLY",
      price: "$50.99",
      features: ["Track your progress", "Get access to supportive community", "Weekly group QnAs", "Test assessments & certificates"],
      cta: { title: "Get Started Now" },
    },
  ];

  return (
    <div className="px-20">
      <SectionHeading>
        Choose a plan that suits you
      </SectionHeading>
      <div className=" flex flex-row">
        <div className=" md:basis-1/2">
          <SectionDescription>
            Both a free trial and a free set of features for anyone who wants to use them. The more orders your company
          </SectionDescription>
        </div>
      </div>

      <div className=" py-8"></div>
      <div className=" flex flex-col justify-start items-start gap-[16px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingList.map((pricing, index) => (
            <PricingCard key={index} type={pricing.type} plan={pricing.plan} price={pricing.price} features={pricing.features} cta={pricing.cta} />
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
  cta: { title: string; };
};

const PricingCard = ({ type, plan, price, features, cta }: PricingCardProps) => {
  const bgColor = type === "default" ? "bg-gray-50" : "bg-gray-900";
  const textColor = type === "default" ? "text-gray-700" : "text-white";
  const buttonColor = type === "default" ? "bg-blue-100" : "bg-blue-500";
  const buttonTextColor = type === "default" ? "text-blue-500" : "text-white";

  return (
    <div className={` flex flex-col justify-start items-center gap-10 p-6 rounded-lg border border-gray-300 ${bgColor}`}>
      <div className=" flex flex-row justify-start items-center gap-2 p-2">
        <span className={` font-roboto text-xs font-medium leading-4 tracking-wide text-center ${textColor}`}>
          {plan}
        </span>
      </div>
      <span className={` font-roboto text-[58px] font-bold leading-[1.38] tracking-[1.16px] text-center ${textColor}`}>
        {price}
      </span>
      <div className={` font-roboto text-base font-normal leading-[2.19] tracking-normal text-center ${textColor}`}>
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
        <span className={` font-roboto text-base font-medium leading-6 text-center ${buttonTextColor}`}>
          {cta.title}
        </span>
      </button>
    </div>
  );
};
