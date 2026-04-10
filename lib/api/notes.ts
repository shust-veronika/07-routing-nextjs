import axios from "axios";

const BASE_URL = "https://notehub-public.goit.study/api";

const instance = axios.create({
  baseURL: BASE_URL,
});

instance.interceptors.request.use((config) => {
  const token = process.env.NOTEHUB_TOKEN;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
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