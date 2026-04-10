import axios from "axios";

const BASE_URL = "https://notehub-public.goit.study/api";

const TOKEN = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
});


export async function fetchNotes() {
  const res = await instance.get("/notes");
  return res.data;
}

export async function fetchNoteById(id: string) {
  const res = await instance.get(`/notes/${id}`);
  return res.data;
}