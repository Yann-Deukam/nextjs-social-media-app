"use client";

import { useSession } from "@/app/(main)/SessionProvider";
import { Button } from "@/components/ui/button";
import UseAvatar from "@/components/UseAvatar";
import Placeholder from "@tiptap/extension-placeholder";
import { EditorContent, useEditor } from "@tiptap/react";
import { StarterKit } from "@tiptap/starter-kit";
import { submitPost } from "./action";
import "./styles.css";

export default function PostEditor() {
  const { user } = useSession();

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bold: false,
        italic: false,
      }),
      Placeholder.configure({
        placeholder: "What's crack-a-lackin'?",
      }),
    ],
  });

  const input =
    editor?.getText({
      blockSeparator: "\n",
    }) || "";

  async function onSubmit() {
    await submitPost(input);
    editor?.commands.clearContent();
  }

  return (
    <div className="flex flex-col gap-5 rounded-lg bg-card p-5 shadow-sm">
      <div className="flex gap-5">
        <UseAvatar avatarUrl={user.avatarUrl} className="hidden sm:inline" />
        <EditorContent
          editor={editor}
          className="max-h-[20rem] w-full overflow-y-auto rounded-lg bg-background px-5 py-3 outline-none focus:outline-none focus:ring-0 focus:border-transparent"
        />
      </div>
      <div className="flex justify-end">
        <Button
          onClick={onSubmit}
          disabled={!input.trim()}
          className="min-w-20"
        >
          Post
        </Button>
      </div>
    </div>
  );
}
