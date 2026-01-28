import Section from "../components_temp/Section";
import Hero from "../components_temp/Hero";
import HomeSection from "../components_temp/HomeSection";
import Features from "../components_temp/Features";
import Footer from "./Footers";

export default function HomePage() {
  return (
    <main>
      <Section>
        <Hero />
      </Section>

      <Section>
        <HomeSection />
      </Section>

      <Section>
        <Features />
      </Section>

      <Section
        title="Ready to try Younggrown?"
        subtitle="Start your free trial or book a personalized demo today."
      />
      <Footer/>
    </main>
  );
}
