import Post from './Post.js';
import fileService from './fileService.js';

class PostSerivce {
  async create(post, picture) {
    const secureUrl = await fileService.uploadImage(picture);
    const createdPost = await Post.create({...post, picture: secureUrl});
    return createdPost;
  }

  async getAll() {
    const posts = await Post.find();
    return posts;
  }

  async getOne(id) {
    if (!id) {
      throw new Error('Id is required');
    }
    const post = await Post.findById(id);
    return post;
  }

  async update(post, picture) {
    if (!post._id) {
      throw new Error('Id is required');
    }
    const secureUrl = await fileService.uploadImage(picture);
    const updatedPost = await Post.findByIdAndUpdate(post._id, { ...post, picture: secureUrl }, {
      new: true,
    });
    return updatedPost;
  }

  async delete(id) {
    if (!id) {
      throw new Error('Id is required');
    }
    const post = await Post.findByIdAndDelete(id);
    return post;
  }
}

export default new PostSerivce();
