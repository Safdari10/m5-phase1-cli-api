import mongoose, { Document, Types } from "mongoose";
import { Status, statusEnum } from "./enums/status";

interface IAuctionItem extends Document {
  title: string;
  description: string;
  start_price: number;
  reserve_price: number;
  endDate: Date;
  sellerId: Types.ObjectId;
  status: Status;
  buyerId?: Types.ObjectId;
}

const auctionItemSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, minlength: 2, maxlength: 100 },
    description: { type: String, required: true, minlength: 5, maxlength: 500 },
    start_price: {
      type: Number,
      required: true,
      validate: {
        validator: (v: number) => v >= 0,
        message: "Start price must be greater than or equal to 0.",
      },
    },
    reserve_price: {
      type: Number,
      required: true,
      validate: {
        validator: function (v: number): boolean {
          return v > (this as any).start_price;
        },
        message: "Reserve price must be greater than start price.",
      },
    },
    endDate: { type: Date, required: true },
    sellerId: { type: Types.ObjectId, required: true, ref: "Seller" },
    status: {
      type: String,
      enum: Object.values(statusEnum),
      required: true,
      default: statusEnum.ACTIVE,
    },
    buyerId: { type: Types.ObjectId, ref: "Buyer" },
  },
  { timestamps: true }
);

const AuctionItem = mongoose.model<IAuctionItem>("AuctionItem", auctionItemSchema);

export default AuctionItem;
