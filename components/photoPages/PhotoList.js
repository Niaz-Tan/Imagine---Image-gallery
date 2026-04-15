import Card from "./components/Card";

const PhotoList = async () => {
  const res = await fetch(`https://iig-one.vercel.app/api/photos`, {
    cache: "no-store",
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch photos");
  }

  const photos = await res.json();

  return (
    <div className="p-6 md:p-8 bg-black min-h-screen">
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-6 space-y-6">
        {photos.map((photo) => (
          <Card key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
