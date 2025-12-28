const { Schema } = require('mongoose')

const postSchema = new Schema(
  {
    channel: { type: Schema.Types.ObjectId, ref: 'Channel', required: true },
    title: { type: String, required: true },
    body: { type: String },
    image: { type: String }
  },
  { timestamps: true }
)

module.exports = postSchema
