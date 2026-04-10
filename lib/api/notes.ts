import axios from "axios";

const BASE_URL = "https://notehub-public.goit.study/api";

export async function fetchNotes() {
  const res = await axios.get(`${BASE_URL}/notes`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
    },
  });

  return res.data;
}