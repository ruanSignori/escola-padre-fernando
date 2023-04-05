import { NavContainer } from "@/components/NavContainer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="page bg-gray-100 dark:bg-gray-900 h-screen">
      <NavContainer />
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-5xl md:text-6xl max-w-7xl text-center text-blue-gray-900 dark:text-white font-extrabold leading-tighter tracking-tighter mt-20 mb-4">
          Escola Padre Fernando{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-600">
            Projetos
          </span>
        </h1>
        <p className="text-xl text-gray-500 text-center mx-3 mb-8 aos-init aos-animate max-w-2xl">
          Confira mais detalhes sobre os projetos que desenvolvemos com nossos alunos e professores
          ❤️.
        </p>

        <Link
          href="/"
          className="text-white text-center px-10 py-4 rounded-lg bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/50 w-5/6 mb-4 sm:w-auto sm:mb-0 "
        >
          Ver mais
        </Link>
      </div>
    </div>
  );
}
