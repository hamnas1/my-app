import { SubHeading } from "../heading";
import { Section } from "../section";


export const About = () => {
  return (
    <Section >
      <SubHeading >
        <div className="pt-6">
        <span> {""}
          A <span className=" text-blue-600">community</span> of passionate
          Flutter learners
        </span>
        </div>
      </SubHeading>
      <div className="py-2"></div>
      <span className="text-xl text-[#5f5f5f] ">
        Our mission is to make learning Flutter accessible and fun for everyone.
        Comprehensive, interactive, and practical learning experience. Join a
        community of passionate learners, help each other grow, and build
        amazing applications together. Our mission is to make learning Flutter
        accessible and fun for everyone. Comprehensive, interactive, and
        practical learning experience. Join a community of passionate learners,
        help each other grow, and build amazing applications together.
      </span>
      
    </Section>
    
  );
};