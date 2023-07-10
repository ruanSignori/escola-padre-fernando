import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import TutorialOneStep from "./assets/img/first-step.webp";
import TutorialSecondStep from "./assets/img/second-step.webp";
import TutorialThirdStep from "./assets/img/third-step.webp";

export default function MageSielDownload() {
  return (
    <div className="page">
      <div className="flex flex-col flex-shrink max-w-6xl m-auto">
        <div className="max-w-5xl">
          <div className="mt-40">
            <Typography
              variant="h1"
              className="font-bold mt-16 mb-4 text-blue-gray-900 dark:text-blue-gray-100"
            >
              Instalação do jogo
            </Typography>
            <Typography variant="lead" className="dark:text-white">
              Caso precise, a gente preparou um &quot;mini-tutorial&quot; de
              como instalar o jogo MageSiel. Você pode conferir como faz a
              instalação do jogo para Windows 10 passo a passo logo a baixo.
            </Typography>
          </div>

          {/* Primeiro passo para instalar */}
          <div className="mt-40">
            <Typography
              variant="h2"
              className="text-zinc-800 dark:text-zinc-300 underline underline-offset-4 hover:text-light-blue-600 transition-colors mb-4"
            >
              Como instalar #1
            </Typography>
            <Typography variant="lead" className="dark:text-white">
              Primeiramente você vai precisar de um descompactador de arquivos!
            </Typography>

            <Typography variant="lead" className="dark:text-white">
              Caso não tenha nenhum instalado em seu computador, clique para
              baixar o
              <Link
                href="https://www.win-rar.com/download.html?&L=9"
                className="font-bold underline"
              >
                {" "}
                WinRar
              </Link>{" "}
              (Descompactador de arquivos recomendado).
            </Typography>

            <Typography variant="lead" className="dark:text-white">
              Após ter clicado no botão de download, espere até que o jogo seja
              baixado. Em seguida vá até a pasta de Downloads de seu computador,
              e clique com o botão direito do mouse no arquivo MageSiel.
            </Typography>

            <Typography variant="lead" className="dark:text-white">
              E em seguida clique em{" "}
              <span className="font-bold">&quot;Extrair Arquivos&quot;</span>
              assim como mostrado na imagem a seguir.
            </Typography>

            <div className="max-w-3xl">
              <Image
                src={TutorialOneStep}
                alt="1º passo de como instalar o jogo MageSiel"
                className="rounded-lg shadow-xl shadow-blue-gray-900/50 mt-4"
              />
            </div>
          </div>

          {/* Segundo passo para instalar */}
          <div className="mt-40">
            <Typography
              variant="h2"
              className="text-zinc-800 dark:text-zinc-300  underline underline-offset-4 hover:text-light-blue-600 transition-colors mb-4"
            >
              Como instalar #2
            </Typography>

            <Typography variant="lead" className="dark:text-white">
              Escolha a pasta de sua preferência para instalar o jogo.
            </Typography>

            <Typography variant="lead" className="dark:text-white">
              Na imagem a seguir, o jogo está sendo salvo na{" "}
              <span className="font-bold">&quot;Área de trabalho&quot;</span>.
            </Typography>

            <Typography variant="lead" className="dark:text-white">
              Em seguida aguarde até o final da extração dos arquivos.
            </Typography>

            <div className="max-w-3xl">
              <Image
                src={TutorialSecondStep}
                alt="2º passo de como instalar o jogo MageSiel"
                className="rounded-lg shadow-xl shadow-blue-gray-900/50 mt-4"
              />
            </div>
          </div>
          {/* Terceiro passo para instalar */}
          <div className="mt-40">
            <Typography
              variant="h2"
              className="text-zinc-800 dark:text-zinc-300 underline underline-offset-4 hover:text-light-blue-600 transition-colors mb-4"
            >
              Como instalar #3
            </Typography>

            <Typography variant="lead" className="dark:text-white">
              Agora simplesmente vá até a pasta que você salvou o jogo, abra
              ela, e execute o arquivo como mostrado na próxima imagem.
            </Typography>

            <Typography variant="lead" className="dark:text-white">
              Se seguiu todos esses passos com sucesso, agora só resta você
              joga-lo!
            </Typography>

            <Typography variant="lead" className="dark:text-white">
              Divirta-se!! 🤗
            </Typography>

            <div className="max-w-3xl">
              <Image
                src={TutorialThirdStep}
                alt="3º passo de como instalar o jogo MageSiel"
                className="rounded-lg shadow-xl shadow-blue-gray-900/50 mt-4"
              />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
