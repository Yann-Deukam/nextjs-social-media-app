import { validateRequest } from "@/auth";
import prisma from "@/lib/prisma";
import { userDataSelect } from "@/lib/tyoes";
import React from "react";

async function WhoToFollow() {
  const { user } = await validateRequest();

  if (!user) {
    return null;
  }

  const userToFollow = await prisma.user.findMany({
    where: {
      NOT: {
        id: user.id,
      },
    },
    select: userDataSelect,
    take: 5,
  });

  return (
    <div className="space-y-5 rounded-lg bg-card p-5 shadow-sm">
      <div className="text-xl text-bold">Who to follow</div>
    </div>
  );
}
const TrendsSidebar = () => {
  return (
    <div className="sticky top-[5.25rem] hidden h-fit w-72 flex-none space-y-5 md:block lg:w-80">
      <WhoToFollow />
    </div>
  );
};

export default TrendsSidebar;
