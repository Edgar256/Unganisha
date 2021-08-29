const mongoose = require("mongoose");
const { user } = require("../constants/roles");

const UserSchema = mongoose.Schema({
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	passwordHash: {
		type: String,
		required: true,
	},
	university: {
		type: String,
		default: "",
	},
	gender: {
		type: String,
		default: "",
	},
	city: {
		type: String,
		default: "",
	},
	country: {
		type: String,
		default: "",
	},
	maritalStatus: {
		type: String,
		default: "",
	},
	following: [
		{
			type: mongoose.Schema.Types.ObjectId,
			refs: "users",
		},
	],
	posts: [
		{
			type: mongoose.Schema.Types.ObjectId,
			refs: "posts",
		},
	],
	followers: [
		{
			type: mongoose.Schema.Types.ObjectId,
			refs: "users",
		},
	],
	isActive: {
		type: Boolean,
		default: true,
	},
	messages: [
		{
			type: mongoose.Schema.Types.ObjectId,
			refs: "messages",
		},
	],
	notifications: [
		{
			type: mongoose.Schema.Types.ObjectId,
			refs: "notifications",
		},
	],
	role: {
		type: String,
		default: user,
	},
	countryCode: {
		type: String,
		default: "",
	},
	phone: {
		type: String,
		default: "",
	},
	dateCreated: {
		type: Date,
		default: Date.now,
	},
});

UserSchema.virtual("id").get(function () {
	return this._id;
});

UserSchema.set("toJSON", {
	virtuals: true,
});

// UserSchema.index({ "$**": "text" });

module.exports = mongoose.model("users", UserSchema);
