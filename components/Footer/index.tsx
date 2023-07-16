import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import VercelIcon from "../../public/vercel.svg";
import { FooterList } from "./FooterList";

export default function Footer() {
  return (
    <footer className="w-full m-auto bg-gray-100 dark:bg-zinc-900 p-8">
      <div className="flex flex-row max-w-screen-lg m-auto flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-gray-100 dark:bg-zinc-900 text-center md:justify-between">
        <Image src={VercelIcon} alt="logo-ct" className="w-10" />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <FooterList />
        </ul>
      </div>
      <Typography
        color="blue-gray"
        className="mt-5 text-center font-normal dark:text-gray-50"
      >
        &copy; 2023 E. E. E. B. Padre Fernando
      </Typography>
    </footer>
  );
}
