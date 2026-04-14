import { getAllPhotos } from "@/lib/methods";

export async function GET(request) {
  const data = getAllPhotos();
  return await Response.json(data);
}
