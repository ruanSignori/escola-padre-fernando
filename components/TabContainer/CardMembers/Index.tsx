import { Typography } from "@material-tailwind/react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { CardMembersProps } from "../types/CardMembersProps";

export function CardMembers({ name, participant }: CardMembersProps) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <UserCircleIcon className="w-12" />
        <div>
          <Typography variant="h6">{name}</Typography>
          <Typography variant="small" color="gray" className="font-normal">
            {participant}
          </Typography>
        </div>
      </div>
    </div>
  );
}
