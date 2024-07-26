import { SectionDescription, SectionHeading } from "@/components/heading";

export const Review = () => {

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
    <div className="px-20 pt-[120px]">
      <div>
        <SectionHeading>
          Hear from our community
        </SectionHeading>
        <div className="flex flex-row">
          <div className=" md:basis-1/2">
            <SectionDescription>
              Success stories from people like you. Join a community of passionate learners and developers. Join Thousands of Satisfied Learners
            </SectionDescription>
          </div>
        </div>
      </div>
      <div className=" py-8"></div>
      <div className=" flex flex-col justify-start items-start gap-[16px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quotes.map((quote, index) => (
            <ReviewCard key={index} quote={quote.quote} name={quote.name} />
          ))}
        </div>
      </div>
    </div>
  );
};


type ReviewCardProps = {
  quote: string;
  name: string;
};
const ReviewCard = ({ quote, name }: ReviewCardProps) => {
  return (
    <div className="p-6 rounded-xl border border-gray-300 bg-gray-100">
      <span className="font-roboto text-base font-normal text-gray-600">
        {quote}
      </span>
      <div className=" py-1"></div>
      <div className=" flex flex-row justify-start gap-3">
        <span className="flex-none w-8 h-8 shadow-[custom]">
          {"IMG"}
        </span>
        <span className="flex-auto font-roboto text-base font-normal text-gray-800">
          {name}
        </span>
      </div>
    </div>
  );
}