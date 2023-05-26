import { NavContainer } from "@/components/NavContainer";
import { HeroContent } from "@/partials/HeroContent";

export default function Home() {
  return (
    <div className="page bg-gray-100 dark:bg-gray-900 h-screen">
      {/* Navbar */}
      <NavContainer />

      {/* Conteúdo da página */}
      <main className="bg-hero-section h-screen">
        {/* Seção de conteúdo */}
        <HeroContent />
      </main>
    </div>
  );
}
