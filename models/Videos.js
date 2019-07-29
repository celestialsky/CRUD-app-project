const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  user: {type: String, required: true},
  url: {type: String, required: true},
  info: String,
  title: {type: String, required: true},
  likes: {type: Number, default: 1},
  dislikes: {type: Number, default: 0},
  comments: [String],
  tags:{type: String, required: true}
});

const Video = mongoose.model('Video', videoSchema);

module.exports = Video;
