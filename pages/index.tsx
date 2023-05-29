import { NavContainer } from "@/components/NavContainer";
import Link from "next/link";
import { useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import RegtechIcon from "../public/images/regtech-icon.png";
import MageSielIcon from "../public/images/mage-siel-boss.webp";

export default function Home() {
  const titlePage = "Escola Padre Fernando projetos";
  useEffect(() => {
    document.title = titlePage;
  }, []);

  return (
    <div className="page bg-gray-100 dark:bg-gray-900">
      {/* Navbar */}
      <NavContainer />

      {/* Conteúdo da página */}
      <main>
        {/* Seção de conteúdo */}
        <section className="bg-hero-section bg-no-repeat bg-auto bg-top min-h-screen">
          {/* Banner content */}
          <div className="flex items-center justify-center flex-col">
            <h1 className="h1 max-w-7xl text-center text-blue-gray-900 dark:text-white tracking-tighter mt-32">
              Escola Padre Fernando{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-600">
                Projetos
              </span>
            </h1>
            <p className="text-xl text-gray-500 dark:text-blue-100 text-center mx-3 mb-8 max-w-2xl">
              Confira mais detalhes sobre os projetos que desenvolvemos com
              nossos alunos e professores ❤️.
            </p>

            <Link href="/">
              <Button size="lg" title="Ver mais">
                Ver mais
              </Button>
            </Link>
          </div>

          <div className="mt-72">
            <div className="mb-20 flex flex-col justify-center items-center">
              <h2 className="h2 dark:text-white text-center mb-4">
                Saiba mais
              </h2>
              <p className="text-xl text-gray-600 dark:text-blue-100 text-center max-w-3xl">
                A seguir, estão os últimos projetos realizados com os alunos.
                Você pode acessar cada um deles e conferir mais detalhes sobre
                😉.
              </p>
            </div>
            <div className="flex justify-center items-center flex-col gap-10">
              <Card className="flex-row w-full max-w-[48rem]">
                <CardHeader
                  shadow={false}
                  floated={false}
                  className="w-2/5 shrink-0 m-0 rounded-r-none"
                >
                  <Image
                    src={RegtechIcon}
                    alt="image"
                    className="w-full h-full object-cover"
                  />
                </CardHeader>
                <CardBody className="dark:bg-zinc-800 rounded-r-lg">
                  <Typography
                    variant="h6"
                    color="blue"
                    className="uppercase mb-4"
                  >
                    RegTech
                  </Typography>
                  <Typography
                    variant="h4"
                    color="blue-gray"
                    className="mb-2 dark:text-gray-200"
                  >
                    Aplicativo de monitoramento do solo
                  </Typography>
                  <Typography
                    color="gray"
                    className="font-normal mb-8 dark:text-gray-500"
                  >
                    A Escola Estadual de Educação Básica Padre Fernando, com a
                    turma 301, desenvolveu um Projeto de Monitoramento do Solo.
                  </Typography>
                  <Link href="#" className="inline-block">
                    <Button variant="text" className="flex items-center gap-2">
                      Ver mais
                      <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
                    </Button>
                  </Link>
                </CardBody>
              </Card>

              <Card className="flex-row w-full max-w-[48rem]">
                <CardHeader
                  shadow={false}
                  floated={false}
                  className="w-2/5 shrink-0 m-0 rounded-r-none"
                >
                  <Image
                    src={MageSielIcon}
                    alt="image"
                    className="w-full h-full object-cover"
                  />
                </CardHeader>
                <CardBody className="dark:bg-zinc-800 rounded-r-lg">
                  <Typography
                    variant="h6"
                    color="blue"
                    className="uppercase mb-4"
                  >
                    MageSiel
                  </Typography>
                  <Typography
                    variant="h4"
                    color="blue-gray"
                    className="mb-2 dark:text-gray-200"
                  >
                    Jogo de computador
                  </Typography>
                  <Typography
                    color="gray"
                    className="font-normal mb-8 dark:text-gray-500"
                  >
                    O jogo MageSiel foi desenvolvido por alunos da Escola
                    Estadual De Educação Básica Padre Fernando e pelo professor
                    Igor dos Santos.
                  </Typography>
                  <Link href="#" className="inline-block">
                    <Button variant="text" className="flex items-center gap-2">
                      Ver mais
                      <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
                    </Button>
                  </Link>
                </CardBody>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
