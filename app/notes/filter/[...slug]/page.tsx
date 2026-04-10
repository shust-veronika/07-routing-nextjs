import { fetchNotes } from "@/lib/api/notes";
import NoteList from "@/components/NoteList/NoteList";

type Props = {
  params: { slug?: string[] };
};

export default async function NotesPage({ params }: Props) {
  const tag = params.slug?.[0];

  const notes =
    tag === "all" || !tag
      ? await fetchNotes()
      : await fetchNotes(tag);

  return <NoteList notes={notes} />;
}