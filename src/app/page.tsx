import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Companies } from "@/components/companies";
import { Timeline } from "@/components/timeline";
import { Skills } from "@/components/skills";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Companies />
        <Timeline />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
