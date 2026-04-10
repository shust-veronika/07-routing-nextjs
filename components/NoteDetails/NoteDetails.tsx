import { Note } from "@/types/note";

type Props = {
  notes: Note;
};

export default function NoteDetails({ note }: Props) {
  return (
    <div>
      <h1>{note.title}</h1>
      <p>{note.content}</p>
    </div>
  );
}