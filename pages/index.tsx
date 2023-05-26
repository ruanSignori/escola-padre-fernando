import { NavContainer } from "@/components/NavContainer";
import { HeroContent } from "@/partials/HeroContent";
import Link from "next/link";

export default function Home() {
  return (
    <div className="page bg-gray-100 dark:bg-gray-900">
      {/* Navbar */}
      <NavContainer />

      {/* Conteúdo da página */}
      <main className="bg-hero-section bg-no-repeat bg-cover h-screen">
        {/* Seção de conteúdo */}
        <HeroContent />
      </main>
    </div>
  );
}
