import { Header } from "@/components/Header";
import { HeroRu } from "@/components/ru/Hero-ru";
import { ProblemsRu } from "@/components/ru/Problems-ru";
import { SolutionRu } from "@/components/ru/Solution-ru";
import { UseCasesRu } from "@/components/ru/UseCases-ru";
import { ProcessRu } from "@/components/ru/Process-ru";
import { FAQRu } from "@/components/ru/FAQ-ru";
import { ContactRu } from "@/components/ru/Contact-ru";
import { FooterRu } from "@/components/ru/Footer-ru";

const IndexRu = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <HeroRu />
        <ProblemsRu />
        <section id="solution">
          <SolutionRu />
        </section>
        <section id="use-cases">
          <UseCasesRu />
        </section>
        <section id="process">
          <ProcessRu />
        </section>
        <section id="faq">
          <FAQRu />
        </section>
        <section id="contact">
          <ContactRu />
        </section>
      </main>
      <FooterRu />
    </div>
  );
};

export default IndexRu;