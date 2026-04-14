import { getPhotoId } from "@/lib/methods";

export async function GET(request, { params }) {
  const { id } = await params;

  const photo = getPhotoId(id);

  if (!photo) {
    return Response.json({ error: "Photo not found" }, { status: 404 });
  }

  return Response.json(photo);
}
