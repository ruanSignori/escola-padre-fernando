import { TabContainer } from "@/components/TabContainer";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { Button } from "@material-tailwind/react";
import Link from "next/link";

export default function Magesiel() {
  return (
    <div className=" py-20 md:py-32 px-3 min-h-screen bg-gray-100 dark:bg-black ">
      <div className="flex flex-col flex-shrink max-w-6xl m-auto">
        <h1 className="h1 text-light-blue-500">MageSiel</h1>
        <TabContainer />
        <h2 className="h2 dark:text-white text-center mt-16 mb-4">
          Faça o download gratuitamente 🎮
        </h2>
        <Link href={"magesiel/download"}>
          <Button
            variant="gradient"
            className="flex items-center gap-3 m-auto mt-6"
          >
            <ArrowDownTrayIcon strokeWidth={2} className="h-5 w-5" />
            Download MageSiel
          </Button>
        </Link>
      </div>
    </div>
  );
}
