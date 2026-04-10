import { fetchNoteById } from "@/lib/api";
import NoteDetails from "@/app/notes/[id]/NoteDetails";

type Props = {
  params: { id: string };
};

export default async function NotePage({ params }: Props) {
  const note = await fetchNoteById(params.id);

  return <NoteDetails note={note} />;
}