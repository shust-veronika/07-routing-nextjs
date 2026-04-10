import Modal from "@/components/Modal/Modal";
import NotePreview from "@/app/@modal/(.)notes/[id]/NotePreview";
import { fetchNoteById } from "@/lib/api";

type Props = {
  params: { id: string };
};

export default async function NoteModal({ params }: Props) {
  const note = await fetchNoteById(params.id);

  return (
    <Modal>
      <NotePreview note={note} />
    </Modal>
  );
}