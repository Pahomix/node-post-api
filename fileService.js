import * as uuid from 'uuid';
import * as path from 'path';
import {v2 as cloudinary} from 'cloudinary';
          
cloudinary.config({ 
  cloud_name: 'dlvk8igke', 
  api_key: '497718144425551', 
  api_secret: 'SH9dXr5R5FG6I7w_IlAuzaAXXLs' 
});

class fileService {
  async uploadImage(file) {
    try {
      const fileName = file.name.split(' ').join('');
      const filePath = path.resolve('static', fileName);
      await file.mv(filePath);
      const result = await cloudinary.uploader.upload(filePath);
      return result.secure_url;
    } catch (e) {
      console.log(e);
    }
  }
}

export default new fileService();
