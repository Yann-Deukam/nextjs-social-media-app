import React from "react";
import avatarPlaceholder from "@/assets/avatar-placeholder.png";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface UseAvatarProps {
  avatarUrl: string | null | undefined;
  size?: number;
  className?: string;
}
const UseAvatar = ({ avatarUrl, size, className }: UseAvatarProps) => {
  return (
    <Image
      src={avatarUrl || avatarPlaceholder}
      alt="user-avatar"
      width={size ?? 48}
      height={size ?? 48}
      className={cn(
        "aspect-square h-fit flex-none rounded-lg bg-secondary object-cover",
        className
      )}
    />
  );
};

export default UseAvatar;
