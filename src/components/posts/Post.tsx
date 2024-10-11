import { PostData } from "@/lib/tyoes";
import Link from "next/link";
import React from "react";
import UseAvatar from "../UseAvatar";
import { formatRelativeDate } from "@/lib/utils";

interface postProps {
  post: PostData;
}

const Post = ({ post }: postProps) => {
  return (
    <article className="space-y-3 rounded-lg bg-card p-5">
      <div className="flex flex-wrap gap-3">
        <Link href={`/users/$post.user.username`}>
          <UseAvatar avatarUrl={post.user.avatarUrl} />
        </Link>
        <div>
          <Link
            href={`/users/${post.user.username}`}
            className="block font-medium hover:underline"
          >
            {post.user.displayName}
          </Link>
          <Link
            className="block text-sm text-muted-foreground hover:underline"
            href={`/posts/${post.id}`}
          >
            {formatRelativeDate(post.createdAt)}
          </Link>
        </div>
      </div>
      <div className="whitespace-pre-line break-words">{post.content}</div>
    </article>
  );
};

export default Post;
