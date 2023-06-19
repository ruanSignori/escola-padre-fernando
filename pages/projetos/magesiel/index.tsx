import { TabContainer } from "@/components/TabContainer";

export default function Magesiel() {
  return (
    <div className=" py-20 md:py-32 px-3 min-h-screen bg-gray-100 dark:bg-black ">
      <div className="flex flex-col flex-shrink max-w-6xl m-auto">
        <h1 className="h1 text-light-blue-500">MageSiel</h1>
        <TabContainer />
      </div>
    </div>
  );
}
