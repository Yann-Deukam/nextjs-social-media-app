"use client";

import { useSession } from "@/app/(main)/SessionProvider";
import { DropdownMenu, DropdownMenuTrigger } from "./ui/dropdown-menu";
import UseAvatar from "./UseAvatar";

interface UserButtonProps {
  className?: string;
}

const UserButton = ({ className }: UserButtonProps) => {
  const { user } = useSession();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="">
          <UseAvatar avatarUrl={user.avatarUrl} size={40} />
        </button>
      </DropdownMenuTrigger>
    </DropdownMenu>
  );
};

export default UserButton;
