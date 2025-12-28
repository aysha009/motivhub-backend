const { Schema } = require('mongoose')

const commentSchema = new Schema(
  {
    post: { type: Schema.Types.ObjectId, ref: 'Post', required: true },
    content: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = commentSchema