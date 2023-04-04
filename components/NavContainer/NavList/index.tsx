import Link from "next/link";

export function NavList() {
  return (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <li className="p-1">
        <Link
          href="#"
          className="flex items-center font-medium text-blue-gray-900 dark:text-white hover:brightness-75 px-5 py-3 transition duration-150 ease-in-out"
        >
          Projetos
        </Link>
      </li>
      <li className="p-1">
        <Link
          href="#"
          className="flex items-center font-medium text-blue-gray-900 dark:text-white hover:brightness-75 px-5 py-3 transition duration-150 ease-in-out"
        >
          Sobre
        </Link>
      </li>

      <li className="p-1">
        <Link
          href="#"
          className="flex items-center font-medium text-blue-gray-900 dark:text-white hover:brightness-75 px-5 py-3 transition duration-150 ease-in-out"
        >
          Informações
        </Link>
      </li>
    </ul>
  );
}
