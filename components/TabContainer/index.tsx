import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Typography,
} from "@material-tailwind/react";
import {
  HomeIcon,
  ChartBarIcon,
  AcademicCapIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import { CardMembers } from "./CardMembers/Index";
import { Members } from "@/models/members";
import { useQuery } from "@tanstack/react-query";

const getMembers = async (): Promise<Members[]> => {
  const url = process.env.API_URL_MEMBERS;

  if (!url) {
    throw new Error("ApiUrl environment variable is undefined or invalid");
  }

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Unable to access data, check URL");
  }

  return res.json();
};

export function TabContainer() {
  const { data } = useQuery({
    queryKey: ["members"],
    queryFn: getMembers,
  });

  const dataTab = [
    {
      label: "Home",
      value: "home",
      icon: HomeIcon,
      desc: (
        <>
          <Typography
            variant="paragraph"
            className="text-gray-800 dark:text-gray-50"
          >
            O jogo MageSiel foi desenvolvido por alunos da{" "}
            <strong>Escola Estadual De Educação Básica Padre Fernando</strong> e
            pelo professor Igor dos Santos (Professor de Física e Matemática da
            escola).
          </Typography>
          <Typography
            variant="paragraph"
            className="text-gray-800 dark:text-gray-50"
          >
            Atualmente você pode jogar o nosso jogo em qualquer sistema
            operacional para computador (não compatível com celulares).
          </Typography>
          <Typography
            variant="paragraph"
            className="text-gray-800 dark:text-gray-50"
          >
            O jogo é totalmente gratuito. Esperamos que você goste do jogo e se
            divirta. Se você for bom, talvez até consiga terminá-lo.
          </Typography>
          <Typography
            variant="paragraph"
            className="text-gray-800 dark:text-gray-50"
          >
            Boa sorte!
          </Typography>
        </>
      ),
    },
    {
      label: "Desenvolvimento",
      value: "desenvolvimento",
      icon: ChartBarIcon,
      desc: (
        <>
          <Typography
            variant="paragraph"
            className="text-gray-800 dark:text-gray-50"
          >
            O projeto “Game na escola” tem como foco principal apresentar uma
            experiência de desenvolvimento de games como ferramenta de
            aprendizagem.
          </Typography>
          <Typography
            variant="paragraph"
            className="text-gray-800 dark:text-gray-50"
          >
            Realizada com um grupo de alunos do 1º e 2° ano do ensino médio,o
            projeto procurou desenvolver um jogo de ação do tipo “plataforma 2D”
            elaborado desde a parte artística (desenhos e cenário feito pelos
            próprios alunos) até a parte da lógica de programação utilizada no
            jogo e na construção do site (de autoria do aluno do 2° ano Ruan
            Signori) conteúdo este que faz parte da grade curricular do novo
            ensino médio.
          </Typography>
        </>
      ),
    },
    {
      label: "Objetivos",
      value: "objetivos",
      icon: AcademicCapIcon,
      desc: (
        <>
          <Typography
            variant="paragraph"
            className="text-gray-800 dark:text-gray-50"
          >
            “É preciso abrir os sistemas de ensino a novas ideias. Em vez da
            homogeneidade e da rigidez, a diferença e a mudança” (Nóvoa - 2009).
          </Typography>
          <Typography
            variant="paragraph"
            className="text-gray-800 dark:text-gray-50"
          >
            Assim, um grande desafio da escola é proporcionar diferentes
            interfaces entre as linguagens contemporâneas, de forma que os
            jovens possam viver e interagir nesse mundo globalizado.
            Instruindo-os sob os aspectos tecnológicos, éticos, humanos e
            culturais, para que possam exercer sua cidadania de forma plena e
            busquem o conhecimento com autonomia e esse foi o grande intuito do
            projeto.
          </Typography>
        </>
      ),
    },
    {
      label: "Créditos",
      value: "creditos",
      icon: UserGroupIcon,
      desc: data?.map(({ name, participant, id }, index) => (
        <CardMembers name={name} participant={participant} key={index} />
      )),
    },
  ];

  return (
    <Tabs value="home" className="mt-10">
      <TabsHeader className="dark:bg-gray-400">
        {dataTab.map(({ label, value, icon }) => (
          <Tab key={value} value={value}>
            <div className="flex items-center gap-2 ">
              {React.createElement(icon, {
                className: "w-5 h-5 dark:text-color",
              })}
              <label className="hidden md:block">{label}</label>
            </div>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {dataTab.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
