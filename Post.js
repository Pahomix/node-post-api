import mongoose from 'mongoose';
import moment from 'moment';

const Post = new mongoose.Schema({
  author: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  picture: { type: String, required: true },
  createdAt: { type: String, default: moment().format('YYYY-MM-DD') },
});

export default mongoose.model('Post', Post);
