import data from "@/data/image.json";

// utils
export function getAllPhotos() {
  return data;
}

export function getPhotoId(id) {
  return data.find((d) => String(d.id) === String(id));
}

export function formate(id, type) {
  const photoDetails = getPhotoId(id);
  let num;
  if (type === "followers") {
    num = photoDetails.author.followers;
  } else if (type === "views") {
    num = photoDetails.views;
  } else if (type === "share") {
    num = photoDetails.share;
  } else if (type === "likes") {
    num = photoDetails.likes;
  }

  return formatThis(num);
}

// Helper functions
function formatThis(num) {
  if (num >= 1000000) {
    const value = (num / 1000000).toFixed(1);
    return value.replace(".0", "") + "M";
  }

  if (num >= 1000) {
    const value = (num / 1000).toFixed(1);
    return value.replace(".0", "") + "K";
  }

  return num.toString();
}
