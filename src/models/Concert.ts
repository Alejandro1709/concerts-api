import mongoose, { Schema } from "mongoose";

const concertSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "The concert must have a title"],
      trim: true,
      unique: true,
      lowercase: true,
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
    },
    description: {
      type: String,
      trim: true,
      default: "This concert has no description",
    },
    imageUrl: {
      type: String,
    },
    date: {
      type: Date,
      required: [true, "The concert must have a date"],
    },
    location: {
      type: {
        type: String,
        enum: ["Point"],
        required: true,
      },
      coordinates: [
        {
          type: Number,
          required: true,
        },
      ],
      address: {
        type: String,
        required: [true, "The concert must have an address"],
      },
      venue: {
        type: String,
        required: [true, "The concert must have a venue"],
      },
      country: {
        type: String,
        required: [true, "The concert must have a country"],
      },
    },
    group: {
      type: Schema.Types.ObjectId,
      ref: "Group",
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Concert", concertSchema);
