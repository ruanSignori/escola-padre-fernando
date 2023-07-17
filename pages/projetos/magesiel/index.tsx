import { TabContainer } from "@/components/TabContainer";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { Button, Carousel, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import FirstImageHistory from "../../../public/images/magesiel/history-1.webp";
import SecondImageHistory from "../../../public/images/magesiel/history-2.webp";
import ThirdImageHistory from "../../../public/images/magesiel/history-3.webp";
import { galleryMageSiel } from "@/utils/galleryMageSiel";
import { CardMembers } from "@/components/CardMembers/Index";
import { GetStaticProps } from "next";
import { Members } from "@/models/members";

type MageSielProps = {
  data: Members[];
};

export default function Magesiel({ data }: MageSielProps) {
  const [buttonClicked, setButtonClicked] = useState(false);

  const router = useRouter();

  const handleDownload = () => {
    setButtonClicked(true);

    const url =
      "https://github.com/ruanSignori/Site-escola/blob/master/src/downloads/MageSiel.rar?raw=true";

    try {
      const link = document.createElement("a");
      link.href = url;
      link.download = "MageSiel.rar";
      link.style.display = "none";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      router.push("magesiel/download");
    } catch (error) {
      console.error("Erro durante o download do arquivo .rar:", error);
    }
    setButtonClicked(false);
  };

  return (
    <div className="page">
      <div className="flex flex-col flex-shrink max-w-6xl m-auto">
        <h1 className="h1 text-light-blue-500">MageSiel</h1>
        <TabContainer>
          {data?.map(({ name, participant }) => (
            <CardMembers
              key={crypto.randomUUID()}
              name={name}
              participant={participant}
            />
          ))}
        </TabContainer>
        <h2 className="h2 dark:text-white text-center mt-16 mb-4">
          Faça o download gratuitamente 🎮
        </h2>
        {/* Botão de download */}
        <Button
          variant="gradient"
          className="flex items-center gap-3 m-auto mt-6"
          onClick={() => handleDownload()}
          disabled={buttonClicked}
        >
          {buttonClicked ? (
            <>
              <svg
                aria-hidden="true"
                role="status"
                className="inline w-6 h-6 mr-3 text-white animate-spin"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="#E5E7EB"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentColor"
                />
              </svg>
              Baixando...
            </>
          ) : (
            <>
              <ArrowDownTrayIcon strokeWidth={2} className="h-5 w-5" />
              Baixar MageSiel
            </>
          )}
        </Button>
        {/* Guia de instalação */}
        <Link
          href="magesiel/download"
          className="underline decoration-dotted text-center mt-6 dark:text-zinc-200 mb-32"
        >
          Guia de instalação
        </Link>
        {/* História sobre o jogo MageSiel */}
        <section className="mb-32">
          <h2 className="h2 dark:text-white">História MageSiel</h2>
          <Typography
            variant="lead"
            className="dark:text-zinc-100 max-w-3xl leading-8 mt-12"
          >
            Recentemente, as famílias de magos estavam sendo extintas. Porém,
            Siel era um dos últimos descendentes de uma família de magos que
            lutava contra terríveis monstros, os quais assombram a humanidade, a
            gerações antepassadas da família de Siel haviam deixado um pedido
            aos descendentes das novas gerações,onde dizia &quot;Jamais revele
            seu rosto ao mundo, não os deixe que reconheçam&quot; por isso Siel
            sempre usa uma máscara que cobre todo seu rosto, por quê? Sua face
            era marcada por um sinal, uma marca de sua família,que era
            impossível de ser tirada pois era de nascença, passada de geração em
            geração e somente os descendentes homens tinham.
          </Typography>

          {/* Carousel contendo imagens mostrando a 1º fase do jogo MageSiel */}
          <Carousel className="rounded-xl w-2/3 mt-6">
            <Image
              src={FirstImageHistory}
              alt="Primeira imagem mostrando a fase inicial de MageSiel"
              className="h-full w-full object-cover"
            />
            <Image
              src={SecondImageHistory}
              alt="Segunda imagem mostrando a fase inicial de MageSiel"
              className="h-full w-full object-cover"
            />
            <Image
              src={ThirdImageHistory}
              alt="Primeira imagem mostrando a fase inicial de MageSiel"
              className="h-full w-full object-cover"
            />
          </Carousel>

          <Typography
            variant="lead"
            className="dark:text-zinc-100 max-w-3xl leading-8 mt-12"
          >
            Por medo de tentar e fracassar também, Siel fugiu de sua cidade e
            largou a magia, mas não completamente, pois ainda utilizava seus
            poderes para fazer algumas Poções e para manter a energia de seu
            cetro. Ele havia ganhado o cetro de seu bisavô, um artefato de
            madeira feito à mão e um cristal também lapidado a mão pelo seu
            bisavô,um dos maiores magos ancião do mundo,um homem sábio que
            ajudava e trabalhava sempre em busca do melhor para sua família e
            mundo.
          </Typography>

          <Typography
            variant="lead"
            className="dark:text-zinc-100 max-w-3xl leading-8 mt-12"
          >
            Após alguns anos de calmaria, os monstros começaram a atacar
            novamente, Siel recebia sinais diariamente mas tentava ignorar e
            para tentar viver sua vida &quot;tranquilamente&quot;. Mas era
            impossível, estava se tornando cada dia mais difícil sair de casa
            para fazer suas tarefas, pois o mundo estava tomado pelo medo e
            caos. Ele desiste de se esconder e se revela como aprendiz de mago,
            e sai numa aventura atrás de aprendizado e formação de seus poderes,
            tentando trazer a paz de volta à vida das pessoas.
          </Typography>
        </section>

        {/* Vídeo contando sobre o seu desenvolvimento */}
        <section className="mb-32">
          <h2 className="h2 dark:text-white">
            Um pouco mais sobre o desenvolvimento
          </h2>
          <div className="flex items-start justify-start h-1/2 mt-12">
            <div className="max-w-screen-lg w-full">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://player.vimeo.com/video/645361061?h=53e31cae8d"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Galeria */}
        <section>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
            {galleryMageSiel.map(({ id, src, alt }) => (
              <div key={id} className="shadow-lg">
                <Image src={src} alt={alt} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const url = process.env.NEXT_PUBLIC_API_URL_MEMBERS;

  if (!url) {
    throw new Error("ApiUrl environment variable is undefined or invalid");
  }

  const res = await fetch(url, {
    mode: "no-cors",
  });

  if (!res.ok) {
    throw new Error("Unable to access data, check URL");
  }

  const data: Promise<Members[]> = await res.json();

  return {
    props: { data },
  };
};
