import { Section, SectionTitle } from "../section";

export const Feature = () => {
  const features: {
    icon: JSX.Element;
    title: string;
  }[] = [
      {
        icon: <svg
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
        </svg>,
        title: "Free and open-source content",
      },
      {
        icon: <svg
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
        </svg>,
        title: "Monthly live sessions & QnA",
      },
      {
        icon: <svg
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
        </svg>,
        title: "Project Based Learning",
      },
      {
        icon: <svg
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
        </svg>,
        title: "Community Support",
      },
      {
        icon: <svg
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
        </svg>,
        title: "Hands on coding exercise",
      }
    ];
  return (
    <Section color="bg-[#171717]">
      <SectionTitle
        heading="Why 100 Days Of Flutter?"
        subheading="From Beginner to Pro in 100 Days. Learning through action and community building."
        headingColor="text-white"
        subheadingColor="text-white"
      />
      <div className=" pt-16" />
      <div className="grid grid-cols-6 gap-6 ">
        <div className="col-span-3">
          <FeatureCard icon={features[0].icon} title={features[0].title} />
        </div>
        <div className="col-span-3">
          <FeatureCard icon={features[1].icon} title={features[1].title} />
        </div>
        <div className="col-span-2">
          <FeatureCard icon={features[2].icon} title={features[2].title} />
        </div>
        <div className="col-span-2">
          <FeatureCard icon={features[3].icon} title={features[3].title} />
        </div>
        <div className="col-span-2">
          <FeatureCard icon={features[4].icon} title={features[4].title} />
        </div>
      </div>
    </Section>
  );
};

const FeatureCard = ({ icon, title }: { icon: any; title: string }) => {
  return (
    <div className="flex flex-col justify-start items-start gap-4 p-6 rounded-xl border border-solid border-[#484848] bg-[#262626]">
      <div className="p-3 rounded-lg border border-solid border-[#484848] bg-[#303030]">
        {icon}
      </div>
      <div className="text-xl text-white">
        {title}
      </div>
    </div>
  );
}