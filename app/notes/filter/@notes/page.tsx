import { fetchNotes } from "@/lib/api/notes";
import css from "./page.module.css";

interface NotesPageProps {
  params: Promise<{
    tag?: string[];
  }>;
}

export default async function NotesPage({ params }: NotesPageProps) {
  const { tag } = await params;
  const filterTag = tag?.[0] === "all" ? undefined : tag?.[0];

  const notes = await fetchNotes(filterTag);

  return (
    <div className={css.container}>
      {notes.map((note: any) => (
        <div key={note.id} className={css.noteCard}>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
        </div>
      ))}
    </div>
  );
}