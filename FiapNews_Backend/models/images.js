import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
  imageUrl: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  caption: { type: String, maxlength: 20, required: true  }, 
  description: { type: String, minlength: 15, required: true  },
}, { versionKey: false });

const ImageModel = mongoose.model("Image", imageSchema);

export default ImageModel;
