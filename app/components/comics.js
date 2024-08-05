

export default function Comics({ data }) {
    return (
      <div className="flex flex-wrap justify-center gap-4 m-5">
        {data.map((comic) => {
          const detailsUrl = comic.urls.find(
            (element) => element["type"] === "detail"
          )?.url;
  
          return (
            <a
              key={comic.id}
              className="block w-48 h-72 bg-cover bg-center text-white rounded-lg overflow-hidden relative border-2 border-gray"
              style={{
                backgroundImage: `url(${comic.thumbnail.path}.${comic.thumbnail.extension})`,
              }}
              href={detailsUrl}
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex justify-center items-center w-full h-full bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <span className="font-bold text-lg text-center">{comic.title}</span>
              </div>
            </a>
          );
        })}
      </div>
    );
  }