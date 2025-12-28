const { Schema } = require('mongoose')

const channelSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String },
  },
  { timestamps: true }
)

module.exports = channelSchema
