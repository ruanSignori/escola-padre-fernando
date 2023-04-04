import { Typography } from "@material-tailwind/react";
import Link from "next/link";

export function NavList() {
  return (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal text-blue-gray-900 dark:text-white"
      >
        <Link href="#" className="flex items-center">
          Projetos
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal text-blue-gray-900 dark:text-white"
      >
        <Link href="#" className="flex items-center">
          Sobre
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal text-blue-gray-900 dark:text-white"
      >
        <Link href="#" className="flex items-center">
          Informações
        </Link>
      </Typography>
    </ul>
  );
}
