import { fetchNotes } from "@/lib/api/notes";
import NoteList from "@/components/NoteList/NoteList";

export default async function NotesPage() {
  const notes = await fetchNotes();

  return <NoteList notes={notes} />;
}