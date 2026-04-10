import { Note } from "@/types/note";

type Props = {
  note: Note;
};

export default function NotePreview({ note }: Props) {
  return (
    <div>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
    </div>
  );
}