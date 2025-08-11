import React, { useState } from "react";

export interface AuctionItem {
  _id: string;
  title: string;
  description: string;
  start_price: number;
  reserve_price: number;
  endDate: string;
  status: string;
}

export function useAuctionSearch() {
  const [query, setQuery] = useState("");
  const [useAI, setUseAI] = useState(false);
  const [results, setResults] = useState<AuctionItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const params = new URLSearchParams({ query, useAI: String(useAI) });
      const res = await fetch(`/api/auction?${params.toString()}`);
      const data = await res.json();
      if (data.success) {
        setResults(data.data);
      } else {
        setError(data.message || "No results found");
        setResults([]);
      }
    } catch (err) {
      setError("Error searching for auction items");
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return {
    query,
    setQuery,
    useAI,
    setUseAI,
    results,
    loading,
    error,
    handleSearch,
  };
}
