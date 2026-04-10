import axios from "axios";

const BASE_URL = "https://notehub-public.goit.study/api";

export async function fetchNotes(tag?: string) {
  const params: Record<string, string> = {};

  if (tag && tag !== "all") {
    params.tag = tag;
  }

  const response = await axios.get(`${BASE_URL}/notes`, {
    params,
  });

  return response.data.notes;
}

export async function fetchNoteById(id: string) {
  const response = await axios.get(`${BASE_URL}/notes/${id}`);
  return response.data;
}