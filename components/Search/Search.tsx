import SearchIcon from "@/svgs/Header/SearchIcon";

const Search = () => {
  return (
    <div className="rounded-full flex min-w-[640px]">
      <input
        placeholder="Search"
        className="bg-black grow border border-white/20 focus-within:border-blue-500
          rounded-l-full px-4 outline-none z-10"
      />

      <button className="bg-white/10 border border-l-0 border-white/20 rounded-full rounded-l-none py-2 px-4">
        <SearchIcon />
      </button>
    </div>
  );
};

export default Search;
