const PhotoList = ({ photos = [] }) => {
  return (
    <div className="p-4">
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="break-inside-avoid overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition duration-300 hover:scale-[1.02]"
          >
            <img
              src={photo.url}
              alt={photo.title || "photo"}
              className="w-full object-cover"
            />

            {photo.title && (
              <div className="p-3 text-sm text-gray-700">{photo.title}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
