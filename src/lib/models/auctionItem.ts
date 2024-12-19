import mongoose, { Document } from "mongoose";

interface IAuctionItem extends Document {
    title: string;
    description: string;
    start_price: number;
    reserve_price: number;
}

const auctionItemSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
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
            validator: function (v: number): boolean { return v > (this as any).start_price; },
            message: "Reserve price must be greater than start price.",
        },
    },
});

const AuctionItem = mongoose.model<IAuctionItem>("AuctionItem", auctionItemSchema);

export default AuctionItem;
