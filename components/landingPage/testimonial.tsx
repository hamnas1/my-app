import { SectionDescription, SectionHeading } from "../heading";
import { Section, SectionTitle } from "../section";

export const Testimonial = () => {

  const quotes: { quote: string, name: string }[] = [
    {
      quote: "“Customers will not download an extra app for pharmacies or the e-prescription. In my opinion, WhatsApp is the most natural solution here.”",
      name: "Leslie Alexander"
    },
    {
      quote: "“With Superchat, we are accessible on exactly the channels that our target group uses.”",
      name: "Leslie Alexander"
    },
    {
      quote: "“With Superchat, we are accessible on exactly the channels that our target group uses.”",
      name: "Leslie Alexander"
    },
    {
      quote: "“Customers will not download an extra app for pharmacies or the e-prescription. In my opinion, WhatsApp is the most natural solution here.”",
      name: "Leslie Alexander"
    },
    {
      quote: "“With Superchat, we are accessible on exactly the channels that our target group uses.”",
      name: "Leslie Alexander"
    },
    {
      quote: "“Customers will not download an extra app for pharmacies or the e-prescription. In my opinion, WhatsApp is the most natural solution here.”",
      name: "Leslie Alexander"
    },
    {
      quote: "“With Superchat, we are accessible on exactly the channels that our target group uses.”",
      name: "Leslie Alexander"
    },
    {
      quote: "“With Superchat, we are accessible on exactly the channels that our target group uses.”",
      name: "Leslie Alexander"
    },
    {
      quote: "“Customers will not download an extra app for pharmacies or the e-prescription. In my opinion, WhatsApp is the most natural solution here.”",
      name: "Leslie Alexander"
    },
    {
      quote: "“With Superchat, we are accessible on exactly the channels that our target group uses.”",
      name: "Leslie Alexander"
    },
    {
      quote: "“Customers will not download an extra app for pharmacies or the e-prescription. In my opinion, WhatsApp is the most natural solution here.”",
      name: "Leslie Alexander"
    },
    {
      quote: "“With Superchat, we are accessible on exactly the channels that our target group uses.”",
      name: "Leslie Alexander"
    },
  ];

  return (
    <div className=" relative">
      <Section>
        <SectionTitle
          heading="Hear from our community"
          subheading="Success stories from people like you. Join a community of passionate learners and developers. Join Thousands of Satisfied Learners"
          headingColor="text-[#171717]"
          subheadingColor="text-[#5f5f5f]"
        />
        <div className=" py-8"></div>
        <div className=" flex flex-col justify-start items-start gap-[16px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quotes.map((quote, index) => (
              <ReviewCard key={index} quote={quote.quote} name={quote.name} />
            ))}
          </div>
        </div>
        <div className=" w-full h-[224px] -z-10 absolute left-0 bottom-0 bg-gradient-to-b from-[#f7f8fa1a] to-[#ebf3fe]" />
      </Section>
    </div>
  );
};


type ReviewCardProps = {
  quote: string;
  name: string;
};
const ReviewCard = ({ quote, name }: ReviewCardProps) => {
  return (
    <div className="p-6 rounded-xl border border-[#e5e5e5] bg-[#f8f9fc]">
      <span className="text-base text-[#5f5f5f]">
        {quote}
      </span>
      <div className=" py-1"></div>
      <div className=" flex flex-row justify-start gap-3">
        <span className="flex-none w-8 h-8 shadow-[custom]">
          {"IMG"}
        </span>
        <span className="flex-auto text-base">
          {name}
        </span>
      </div>
    </div>
  );
}