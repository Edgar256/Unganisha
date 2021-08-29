const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
	author: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "users",
	},
	text: {
		type: String,
		default: "",
	},
	image: {
		type: String,
		default: "",
	},
	video: {
		type: String,
		default: "",
	},
	likes: [
		{
			type: mongoose.Schema.Types.ObjectId,
			refs: "users",
		},
	],
	shares: [
		{
			type: mongoose.Schema.Types.ObjectId,
			refs: "users",
		},
	],
	comments: [
		{
			type: mongoose.Schema.Types.ObjectId,
			refs: "comments",
		},
	],
	views: [
		{
			type: mongoose.Schema.Types.ObjectId,
			refs: "users",
		},
	],
	dateCreated: {
		type: Date,
		default: Date.now,
	},
});

PostSchema.virtual("id").get(function () {
	return this._id;
});

PostSchema.set("toJSON", {
	virtuals: true,
});

PostSchema.index({ "$**": "text" });

module.exports = mongoose.model("posts", PostSchema);
