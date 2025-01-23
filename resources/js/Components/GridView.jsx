const GridView = ({ data }) => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.length > 0 ? (
          data.map((item) => (
            <div
              key={item.id}
              className="border border-slate-800 rounded-md p-4  shadow-md"
            >
                <img src={item.cover_karya} alt="" />
              <h3 className="font-bold">{item.judul_karya}</h3>
              <p>Status: {item.status}</p>
              <p>
                Created at:{" "}
                {new Date(item.created_at).toLocaleDateString("en-GB", {
                  weekday: "short",
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </p>
              <div className="flex justify-between mt-4">
                <button className="btn btn-sm btn-outline text-green-400">
                  Detail
                </button>
                <button className="btn btn-sm btn-outline text-yellow-400">
                  Edit
                </button>
                <button className="btn btn-sm btn-outline text-red-500">
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-gray-500 text-center col-span-full">
            No Audiobooks found.
          </div>
        )}
      </div>
    );
  };
  
  export default GridView;
  