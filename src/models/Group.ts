import mongoose, { Schema } from "mongoose";

const groupSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "The group must have a title"],
      trim: true,
      unique: true,
      lowercase: true,
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
    },
    concerts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Concert",
      },
    ],
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Group", groupSchema);
