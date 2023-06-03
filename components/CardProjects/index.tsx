import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

import { CardProjects } from "./types/CardProjects";

import Link from "next/link";
import Image from "next/image";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

export function CardProjects(project: CardProjects) {
  return (
    <Card className="flex-row w-full max-w-[48rem] flex-wrap md:flex-nowrap">
      <CardHeader
        shadow={false}
        floated={false}
        className=" md:w-2/5 shrink-0 m-0 rounded-r-none"
      >
        <Image
          src={project.img}
          alt={project.name}
          className="w-full h-full object-center object-scale-down md:object-cover"
        />
      </CardHeader>
      <CardBody className="dark:bg-zinc-900 rounded-r-lg">
        <Typography variant="h6" color="blue" className="uppercase mb-4">
          {project.name}
        </Typography>
        <Typography
          variant="h4"
          color="blue-gray"
          className="mb-2 dark:text-gray-200"
        >
          {project.banner}
        </Typography>
        <Typography
          color="gray"
          className="font-normal mb-8 dark:text-gray-500"
        >
          {project.description}
        </Typography>
        <Link
          href={`projects/${encodeURI(project.linkToAcess)}`}
          className="inline-block"
        >
          <Button variant="text" className="flex items-center gap-2">
            Ver mais
            <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
          </Button>
        </Link>
      </CardBody>
    </Card>
  );
}
