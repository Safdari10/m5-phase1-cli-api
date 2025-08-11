import mongoose, { Document, Types } from "mongoose";

interface ISeller extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  auctionItems: Types.ObjectId[];
}

const sellerSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, minlength: 2, maxlength: 50 },
    lastName: { type: String, required: true, minlength: 2, maxlength: 50 },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /^\S+@\S+\.\S+$/,
      minlength: 5,
      maxlength: 100,
    },
    phone: {
      type: String,
      required: true,
      match: /^\d{10}$/,
      minlength: 10,
      maxlength: 15,
    },
    address: { type: String, required: true, minlength: 5, maxlength: 200 },
    auctionItems: [{ type: Types.ObjectId, ref: "AuctionItem" }],
  },
  { timestamps: true }
);

export const Seller = mongoose.model<ISeller>("Seller", sellerSchema);
