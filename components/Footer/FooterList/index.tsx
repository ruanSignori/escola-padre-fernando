import { Typography } from "@material-tailwind/react";

export function FooterList() {
  return (
    <>
      <li>
        <Typography
          as="a"
          href="https://github.com/ruanSignori/escola-padre-fernando"
          target="_blank"
          color="blue-gray"
          className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 dark:text-gray-50"
        >
          Código fonte
        </Typography>
      </li>
    </>
  );
}
