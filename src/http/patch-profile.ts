import axios from "axios";

export async function patchProfileHttp({
  id,
  email,
  name,
}: {
  id: number;
  email: string;
  name: string;
}) {
  const request = await axios.patch(
    `${import.meta.env.VITE_URL_BASE}/users/${Number(id)}`,
    {
      email: email,
      name: name,
    }
  );

  const response = await request.data;
  console.log(response);
  return response;
}
