import axios from "axios";

export async function getProfile({ queryKey }: any) {
  const userId = JSON.parse(queryKey[1]).id;
  const request = await axios.get(
    `${import.meta.env.VITE_URL_BASE}/users/${Number(userId)}`
  );

  const data = await request.data;
  return data;
}
