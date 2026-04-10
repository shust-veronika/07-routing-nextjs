import { getNotes } from "@/lib/api/notes";
import css from "./NotesList.module.css";

interface NotesPageProps {
  params: {
    tag?: string[];
  };
}

export default async function NotesPage({ params }: NotesPageProps) {
  const resolvedParams = await params;
  const tag = resolvedParams.tag?.[0];
  const filterTag = tag === "all" ? undefined : tag;

  const notes = await getNotes(filterTag);

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