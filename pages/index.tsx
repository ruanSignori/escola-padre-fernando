import Link from "next/link";
import { useEffect } from "react";
import { Button } from "@material-tailwind/react";
import { CardProjects } from "@/components/CardProjects";
import RegtechIcon from "../public/images/regtech-icon.png";
import MageSielIcon from "../public/images/mageSiel-icon.webp";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    const titlePage = "Escola Padre Fernando projetos";
    document.title = titlePage;
  }, []);

  return (
    <div className="bg-gray-100 dark:bg-black">
      {/* Main content of the page */}
      <main className="mb-12 bg-hero-section bg-no-repeat bg-auto bg-top page flex flex-col flex-grow ">
        {/* Presentation */}
        <div className="flex items-center justify-center flex-col mt-32">
          <h1 className="h1 max-w-7xl text-center text-blue-gray-900 dark:text-white tracking-tighter">
            Escola Padre Fernando{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-600">
              Projetos
            </span>
          </h1>
          <p className="text-xl text-gray-500 dark:text-blue-100 text-center mt-5 mb-8 max-w-2xl">
            Confira mais detalhes sobre os projetos que desenvolvemos com nossos
            alunos e professores ❤️.
          </p>

          <Link href="/">
            <Button size="lg" title="Ver mais">
              Ver mais
            </Button>
          </Link>
        </div>

        {/* More info section */}
        <div className="mt-72">
          <div className="mb-20 flex flex-col justify-center items-center">
            <h2 className="h2 dark:text-white text-center mb-4">Saiba mais</h2>
            <p className="text-xl text-gray-600 dark:text-blue-100 text-center max-w-3xl">
              A seguir, estão os últimos projetos realizados com os alunos. Você
              pode acessar cada um deles e conferir mais detalhes sobre 😉.
            </p>
          </div>
        </div>

        {/* Section of Cards */}
        <div className="flex justify-center items-center flex-col gap-10">
          {/* List of cards components */}
          <CardProjects
            name="MageSiel"
            banner="Jogo de computador"
            description="O jogo MageSiel foi desenvolvido por alunos da Escola Estadual De Educação Básica Padre Fernando e pelo professor Igor dos Santos."
            img={MageSielIcon}
            linkToAcess="magesiel"
          />

          <CardProjects
            name="RegTech"
            banner="Aplicativo de monitoramento do solo"
            description="A Escola Estadual de Educação Básica Padre Fernando, com a turma 301, desenvolveu um Projeto de Monitoramento do Solo."
            img={RegtechIcon}
            linkToAcess="regtech"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
