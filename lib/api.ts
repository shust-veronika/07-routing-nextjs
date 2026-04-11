import axios from "axios";
import { Note } from "@/types/note";

interface NotesResponse {
  notes: Note[];
  total: number;
  page: number;
  pages: number;
}

const BASE_URL = "https://notehub-public.goit.study/api";

const instance = axios.create({
  baseURL: BASE_URL,
});


instance.interceptors.request.use((config) => {
  const token = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


export async function fetchNotes(
  tag?: string,
  search?: string,
  page: number = 1
): Promise<NotesResponse> {
  const res = await instance.get<NotesResponse>("/notes", {
    params: {
      tag,
      search,
      page,
    },
  });
  return res.data;
}

export async function fetchNoteById(id: string): Promise<Note> {
  const res = await instance.get<Note>(`/notes/${id}`);
  return res.data;
}