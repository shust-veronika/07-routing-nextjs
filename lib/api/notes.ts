import axios from "axios";

const BASE_URL = "https://notehub-public.goit.study/api";

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
  },
});

export async function fetchNotes(tag?: string) {
  const res = await instance.get("/notes", {
    params: tag ? { tag } : {},
  });

  return res.data;
}

export async function fetchNoteById(id: string) {
  const res = await instance.get(`/notes/${id}`);
  return res.data;
}