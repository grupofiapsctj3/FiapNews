/*import mongoose from "mongoose";

const archiveNewsSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId},
    url: { type: String, required: true },
    date: { type: Date, default: Date.now },
    legenda: { type: String, maxlength: 20 }, 
    descricao: { type: String, minlength: 15 },
}, { versionKey: false });

const archiveNews = mongoose.model("images", archiveNewsSchema);

export default archiveNews;
*/

import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
  imageUrl: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  caption: { type: String, maxlength: 20, required: true  }, 
  description: { type: String, minlength: 15, required: true  },
}, { versionKey: false });

const ImageModel = mongoose.model("Image", imageSchema);

export default ImageModel;
