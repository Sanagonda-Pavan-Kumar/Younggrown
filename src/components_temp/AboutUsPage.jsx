import { useEffect } from "react";
import Section from "./Section";
import AboutUs from "./AboutUs";

export default function AboutUsPage() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <Section>
      <AboutUs />
    </Section>
  );
}
