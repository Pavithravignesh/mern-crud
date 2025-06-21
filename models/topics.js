import mongoose, { Schema } from "mongoose";

const topicSchema = new Schema(
  {
    topic: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Topic = mongoose.models?.Topics || mongoose.model("Topic", topicSchema);

export default Topic;
