import { 
  dehydrate, 
  HydrationBoundary, 
  QueryClient 
} from "@tanstack/react-query";
import { fetchNotes } from "@/lib/api";
import NoteList from "@/components/NoteList/NoteList";

type Props = {
  params: Promise<{ slug?: string[] }>;
};

export default async function NotesPage({ params }: Props) {
  const { slug } = await params;
  const tagFromSlug = slug?.[0];
  
  const tag = tagFromSlug === "all" || !tagFromSlug ? undefined : tagFromSlug;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["notes", { tag }],
    queryFn: () => fetchNotes(tag),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NoteList tag={tag} />
    </HydrationBoundary>
  );
}