import Link from "next/link";

export function HeroContent() {
  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="h1 max-w-7xl text-center text-blue-gray-900 dark:text-white tracking-tighter mt-40">
        Escola Padre Fernando{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-600">
          Projetos
        </span>
      </h1>
      <p className="text-xl text-gray-500 text-center mx-3 mb-8 aos-init aos-animate max-w-2xl">
        Confira mais detalhes sobre os projetos que desenvolvemos com nossos
        alunos e professores ❤️.
      </p>

      <Link href="/" className="btn">
        Ver mais
      </Link>
    </div>
  );
}
