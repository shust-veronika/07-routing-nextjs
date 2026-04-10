import Modal from "@/components/Modal/Modal";
import NotePreview from "@/components/NotePreview/NotePreview";
import { fetchNoteById } from "@/lib/api/notes";

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