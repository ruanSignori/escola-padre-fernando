import { Typography } from "@material-tailwind/react";

export function FooterList() {
  return (
    <>
      <li>
        <Typography
          as="a"
          href="#"
          color="blue-gray"
          className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 dark:text-gray-50"
        >
          About Us
        </Typography>
      </li>
      <li>
        <Typography
          as="a"
          href="#"
          color="blue-gray"
          className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 dark:text-gray-50"
        >
          License
        </Typography>
      </li>
      <li>
        <Typography
          as="a"
          href="#"
          color="blue-gray"
          className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 dark:text-gray-50"
        >
          Contribute
        </Typography>
      </li>
      <li>
        <Typography
          as="a"
          href="#"
          color="blue-gray"
          className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 dark:text-gray-50"
        >
          Contact Us
        </Typography>
      </li>
    </>
  );
}
