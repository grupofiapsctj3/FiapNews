import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    type: { type: String, required: true },
    date: { type: Date, required: true },
    title: { type: String, required: true },
    summary: { type: String, required: true },
    urlVideo: { type: String, required: true },
}, { versionKey: false });

const videoNewsModel = mongoose.model("videoNews", videoSchema, "videoNews");

export default videoNewsModel;


