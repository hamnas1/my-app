// pages/page.tsx
import { Navbar } from "@/components/landingPage/navbar";
import { Footer } from "@/components/landingPage/footer";
import { Hero } from "@/components/landingPage/hero";
import { About } from "@/components/landingPage/about";
import { Feature } from "@/components/landingPage/feature";
import { Testimonial } from "@/components/landingPage/testimonial";
import  { Pricing }   from "@/components/landingPage/pricing";
import { MainCTA } from "@/components/landingPage/mainCTA";
import { Qna } from "@/components/landingPage/qna";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <section id="about">
        <About />
      </section>
      <section id="feature">
        <Feature />
      </section>
      <section id="testimonial">
        <Testimonial />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
      <section id="main-cta">
        <MainCTA />
      </section>
      <section id="qna">
        <Qna />
      </section>
      <Footer />

    
    </>
  );
}


