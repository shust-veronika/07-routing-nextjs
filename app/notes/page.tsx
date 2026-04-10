import { fetchNotes } from "@/lib/api/notes";
import NoteList from "@/components/NoteList/NoteList";

export const dynamic = "force-dynamic";

export default async function NotesPage() {
  try {
    const notes = await fetchNotes();

    return <NoteList notes={notes} />;
  } catch (error) {
    console.error("Failed to load notes:", error);

    return <div>Failed to load notes</div>;
  }
}