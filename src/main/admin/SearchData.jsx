export default function SearchData() {
  const handelSearch = (word) => {
    if (!word) return;
    // api get search data
  };
  return (
    <div>
      <input
        type="search"
        name=""
        id=""
        className="border rounded p-1 min-w-[500px] shadow outline-none text-gray-500"
        onChange={(e) => handelSearch(e?.target?.value)}
      />
    </div>
  );
}
