const mongoose = require("mongoose");

const CommentSchema = mongoose.Schema({
	author: {
		type: mongoose.Schema.Types.ObjectId,
		refs: "users",
	},
	post: {
		type: mongoose.Schema.Types.ObjectId,
		refs: "posts",
	},
	text: {
		type: String,
		required: true
	},
	likes: [
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

CommentSchema.virtual("id").get(function () {
	return this._id;
});

CommentSchema.set("toJSON", {
	virtuals: true,
});

CommentSchema.index({ "$**": "text" });

module.exports = mongoose.model("comments", CommentSchema);
