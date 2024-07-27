import { Navbar } from "@/components/landingPage/navbar";
import { Footer } from "../components/landingPage/footer";
import { Hero } from "@/components/landingPage/hero";
import { About } from "@/components/landingPage/about";
import { Feature } from "@/components/landingPage/feature";
import { Testimonial } from "@/components/landingPage/testimonial";
import { Pricing } from "@/components/landingPage/pricing";
import { MainCTA } from "@/components/landingPage/mainCTA";
import { Qna } from "@/components/landingPage/qna";


export default async function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Feature />
      <Testimonial />
      <Pricing />
      <MainCTA />
      <Qna />
      <Footer />
    </>
  );
}
