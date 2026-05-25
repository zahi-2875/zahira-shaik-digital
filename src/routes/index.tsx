import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Skills } from "@/components/site/Skills";
import { Experience } from "@/components/site/Experience";
import { Projects } from "@/components/site/Projects";
import { Certifications } from "@/components/site/Certifications";
import { Impact } from "@/components/site/Impact";
import { SeoShowcase } from "@/components/site/SeoShowcase";
import { Insights } from "@/components/site/Insights";
import { Contact, Footer } from "@/components/site/Contact";

const title = "Zahira Shaik — SEO Strategist · AI Content Consultant · Global Impact";
const description =
  "Portfolio of Zahira Shaik — Computer Science Engineer (AI & ML), Senior SEO Content Writer, GEO strategist, and AI-driven content consultant for humanitarian, research, and global development initiatives.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "author", content: "Zahira Shaik" },
      {
        name: "keywords",
        content:
          "Zahira Shaik, SEO Content Writer, SEO Strategist, GEO, Generative Engine Optimization, AI Content Consultant, Technical SEO, Humanitarian, UN, UNICEF, UNDP, AI/ML, Research Communication",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Zahira Shaik",
          jobTitle:
            "SEO Content Writer · SEO/GEO Consultant · AI-Driven Content Strategist",
          description,
          knowsAbout: [
            "Search Engine Optimization",
            "Generative Engine Optimization",
            "Technical SEO",
            "Content Strategy",
            "Artificial Intelligence",
            "Machine Learning",
            "Research Communication",
            "Digital Accessibility",
          ],
          sameAs: [
            "https://www.linkedin.com/in/zahira-shaik-1ab213262/",
            "https://github.com/zahi-2875?tab=repositories"
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <SeoShowcase />
      <Certifications />
      <Impact />
      <Insights />
      <Contact />
      <Footer />
    </main>
  );
}
