import React from "react";
import AuctionItemCard from "./AuctionItemCard";
import { useAuctionSearch } from "../hooks/useAuctionSearch";

const SearchBar: React.FC = () => {
  const { query, setQuery, useAI, setUseAI, results, loading, error, handleSearch } =
    useAuctionSearch();

  return (
    <div className="max-w-xl mx-auto mt-8">
      <form onSubmit={handleSearch} className="flex gap-2 mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search auction items..."
          className="flex-1 border rounded px-3 py-2"
        />
        <label className="flex items-center gap-1 text-sm">
          <input type="checkbox" checked={useAI} onChange={(e) => setUseAI(e.target.checked)} />
          Use AI refined
        </label>
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
          {loading ? "Searching..." : "Search"}
        </button>
      </form>
      {error && <div className="text-red-600 mb-2">{error}</div>}
      <div>
        {results.length > 0
          ? results.map((item) => <AuctionItemCard key={item._id} item={item} />)
          : null}
      </div>
    </div>
  );
};

export default SearchBar;
