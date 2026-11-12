import { ContactSection } from "@/components/ContactSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { Hero } from "@/components/Hero";
import { SelectedWork } from "@/components/SelectedWork";
import { SiteHeader } from "@/components/SiteHeader";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl flex-1 px-5 sm:px-8">
        <Hero />
        <div className="flex flex-col gap-32 pb-16">
          <ExperienceSection />
          <SelectedWork />
          <ContactSection />
        </div>
      </main>
    </>
  );
}
