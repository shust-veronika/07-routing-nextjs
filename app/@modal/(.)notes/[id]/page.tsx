import { 
  dehydrate, 
  HydrationBoundary, 
  QueryClient 
} from "@tanstack/react-query";
import { fetchNoteById } from "@/lib/api";
import NoteDetails from "@/app/notes/[id]/NoteDetails.client";
import { Note } from "@/types/note";

type Props = {
  params: { id: string };
};

export default async function NoteModalPage({ params }: Props) {
  const { id } = params;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
  });

  const note = queryClient.getQueryData<Note>(["note", id]);

  if (!note) {
    return <div>Note not found</div>;
  }

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NoteDetails note={note} />
    </HydrationBoundary>
  );
}