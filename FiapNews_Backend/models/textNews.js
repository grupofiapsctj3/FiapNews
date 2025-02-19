import mongoose from "mongoose";

const textNews = new mongoose.Schema({
    type: { type: String, required: true },
    date: { type: Date, required: true },
    title: { type: String, required: true },
    briefTitle: { type: String, required: true },
    subTitle: { type: String, required: true },
    briefSubTitle: { type: String, required: true },
    summary: { type: String, required: true },
    news: { type: String, required: true },
}, { versionKey: false });

const textNewsModel = mongoose.model("textNews", textNews);

export default textNewsModel;