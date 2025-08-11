import React from "react";

interface AuctionItemCardProps {
  item: {
    _id: string;
    title: string;
    description: string;
    start_price: number;
    reserve_price: number;
    endDate: string;
    status: string;
  };
}

const AuctionItemCard: React.FC<AuctionItemCardProps> = ({ item }) => {
  return (
    <div className="border rounded p-4 shadow mb-4">
      <h2 className="font-bold text-lg mb-2">{item.title}</h2>
      <p className="mb-1 text-sm text-gray-700">{item.description}</p>
      <div className="text-xs text-gray-500 mb-1">Status: {item.status}</div>
      <div className="flex gap-4 text-sm">
        <span>Start: ${item.start_price}</span>
        <span>Reserve: ${item.reserve_price}</span>
      </div>
      <div className="text-xs text-gray-400 mt-2">
        Ends: {new Date(item.endDate).toLocaleString()}
      </div>
    </div>
  );
};

export default AuctionItemCard;
