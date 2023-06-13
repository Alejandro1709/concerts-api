import mongoose, { Schema } from "mongoose";
import slugify from "slugify";

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

groupSchema.pre("save", function (next) {
  if (!this.isModified("name")) {
    next();
  }

  this.slug = slugify(this.name as string, { lower: true });

  next();
});

export default mongoose.model("Group", groupSchema);
