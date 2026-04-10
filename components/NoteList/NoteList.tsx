import Link from "next/link";
import { Note } from "@/types/note";

type Props = {
  notes: Note[];
};

export default function NoteList({ notes }: Props) {
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