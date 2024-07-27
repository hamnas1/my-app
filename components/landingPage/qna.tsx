import { Section, SectionTitle } from "../section";

export const Qna = () => {
  const qnAs: {
    question: string;
    answer: string;
  }[] = [
      {
        question: "Is the 100 days of flutter challenge free?",
        answer: "Yes, all the educational content is free or at minimal cost.",
      },
      {
        question: "Do I need to pay for anything else besides Numeral to file my sales tax?",
        answer: "There are a few states that require a registration fee; however, most states are free. Besides that, the only recurring charge are your monthly/quarterly/annual filings.",
      },
      {
        question: "Do I need to pay for anything else besides Numeral to file my sales tax?",
        answer: "There are a few states that require a registration fee; however, most states are free. Besides that, the only recurring charge are your monthly/quarterly/annual filings.",
      },
    ];

  return (
    <Section >
      <div className=" flex flex-row gap-4 relative">
        <SectionTitle
          heading="Let us listen to your problems"
          subheading="Got Questions? We&apos;ve got answers"
        />
        <div className="flex flex-col gap-6">
          {qnAs.map((qa, index) => (
            <QnaCard
              key={index}
              question={qa.question}
              answer={qa.answer}
            />
          ))}
        </div>
        <div className=" w-[200px] h-[200px] -z-10 bg-[#fea520] absolute left-[3%] bottom-16 filter blur-[250px]">
          {" "}
        </div>
      </div>
    </Section>
  );
};

const QnaCard = ({ question, answer }: { question: string; answer: string }) => {
  return (
    <div className="flex flex-col gap-6 p-6 rounded-xl border border-[#e5e5e5] bg-white">
      <span className="text-base font-medium">
        {question}
      </span>
      <span className="text-base text-[#5f5f5f] ">
        {answer}
      </span>
    </div>
  );
}
