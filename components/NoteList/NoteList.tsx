'use client';

import { useQuery } from "@tanstack/react-query";
import { fetchNotes } from "@/lib/api";
import Link from "next/link";
import { Note } from "@/types/note";

type Props = {
  tag?: string;
};

export default function NoteList({ tag }: Props) {
  const { data } = useQuery({
    queryKey: ["notes", { tag }],
    queryFn: () => fetchNotes(tag),
  });

  const notes: Note[] = data?.notes || [];

  return (
    <ul>
      {notes.map((note) => (
        <li key={note.id}>
          <Link href={`/notes/${note.id}`}>
            {note.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}