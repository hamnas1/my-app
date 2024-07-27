import { Section, SectionTitle } from "../section";

export const Pricing = () => {
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
    <Section >
      <SectionTitle
        heading="Choose a plan that suits you"
        subheading="Both a free trial and a free set of features for anyone who wants to use them. The more orders your company"
      />
      <div className=" py-8" />
      <div className=" flex justify-center flex-col  items-center gap-[16px]">
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
    </Section>
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
  const bgColor = type === "default" ? "bg-[#f8f9fc]" : "bg-[#171717]";
  const borderColor = type === "default" ? "border-[#e5e5e5]" : "border-[#484848]";
  const textColor = type === "default" ? "text-[#171717]" : "text-white";
  const buttonColor = type === "default" ? "bg-[#ecf0f9]" : "bg-[#1774ff]";
  const buttonTextColor = type === "default" ? "text-[#1774ff]" : "text-white";

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
