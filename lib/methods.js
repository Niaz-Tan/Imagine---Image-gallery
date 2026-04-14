import data from "@/data/image.json";

export function getAllPhotos() {
  return data;
}

export function getPhotoId(id) {
  return data.find((d) => String(d.id) === String(id));
}
