import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import router from './router.js';
import fileUpload from 'express-fileupload';

const app = express();
const PORT = process.env.PORT || 5000;
const DB_URL =
  'mongodb+srv://pahomix:pahomix@cluster0.sg24f2q.mongodb.net/?retryWrites=true&w=majority';

app.use(cors());
app.use(express.json());
app.use(express.static('static'));
app.use(fileUpload({}));
app.use('/api', router);
async function startApp() {
  try {
    await mongoose.connect(DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
}

startApp();
