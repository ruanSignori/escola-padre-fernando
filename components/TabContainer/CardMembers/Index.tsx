import { Typography } from "@material-tailwind/react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { CardMembersProps } from "../types/CardMembersProps";

export function CardMembers({ name, participant }: CardMembersProps) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-3">
        <UserCircleIcon className="w-12 h-12 fill-gray-400" />
        <div>
          <Typography variant="h6" className="text-blue-gray-900 dark:text-gray-400">{name}</Typography>
          <Typography variant="small" color="gray" className="font-normal">
            {participant}
          </Typography>
        </div>
      </div>
    </div>
  );
}
