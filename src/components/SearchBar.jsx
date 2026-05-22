export default function SearchBar({ search, setSearch }) {
  return (
    <div className="search-wrap glass">
      <input
        type="text"
        placeholder="Search colleges..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}