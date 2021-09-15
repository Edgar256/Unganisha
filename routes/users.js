const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const UserModel = require("../models/User.model");
const roles = require("../constants/roles");

//Get all users
router.get("/", async (req, res) => {
	try {
		const UsersList = await UserModel.find()
			.select("-passwordHash")
			.select("-role");
		return res.status(200).send({ message: UsersList, success: true });
	} catch (error) {
		return res.send({ error: error, success: false });
	}
});

//Count all users
router.get("/get/count", async (req, res) => {
	try {
		UserModel.countDocuments({}, (error, count) => {
			if (error) return res.json({ error: error, success: false });
			res.status(200).json({ count, success: true });
		});
	} catch (error) {
		res.json({ error: error, success: false });
	}
});

//Get one user
router.get("/:id", async (req, res) => {
	try {
		const user = await UserModel.findById(req.params.id)
			.select("-passwordHash")
			.select("-role");

		if (!user)
			return res.send({
				error: `User not found`,
				success: false,
			});
		res.send({ message: user, success: true });
	} catch (error) {
		res.json({ error: error, success: false });
	}
});

//Delete user
router.delete("/:id", async (req, res) => {
	try {
		//check if user exists
		const user = await UserModel.findById(req.params.id);
		if (!user)
			return res.send({
				error: "User Not Found",
				success: false,
			});
		UserModel.findByIdAndDelete(req.params.id)
			.then((userDeleted) => {
				res.status(200).json({
					message: `${userDeleted.firstName} deleted`,
					success: true,
				});
			})
			.catch((error) => {
				res.json({ error: error, success: false });
			});
	} catch (error) {
		res.json({ error: error, success: false });
	}
});

//User Login
router.post("/login", async (req, res) => {
	try {
		if (!req.body.email || !req.body.password)
			return res.send({
				error: `Please enter Email and Password`,
				success: false,
			});

		//check if user exists
		const user = await UserModel.findOne({ email: req.body.email });
		if (!user)
			return res.send({
				error: "User not found.",
				success: false,
			});
		if (!user.isActive)
			return res.send({
				error:
					"Your Account has been Deactivated. Please contact System admin to Activate your account",
				success: false,
			});

		//Check if password is correct
		const checkPassword = await bcrypt.compare(
			req.body.password,
			user.passwordHash
		);

		if (checkPassword === false)
			return res.send({
				error: "Entered wrong password",
				success: false,
			});
		const secret = process.env.TOKEN_SECRET;
		const token = jwt.sign(
			{
				id: user.id,
				role: roles.user,
			},
			secret,
			{ expiresIn: "3h" }
		);

		return res.status(200).send({ message: token, success: true });
	} catch (error) {
		res.json({ error: error, success: false });
	}
});

//User register
router.post("/register", async (req, res) => {
	try {
		// Check for input
		if (
			!req.body.firstName ||
			!req.body.lastName ||
			!req.body.email ||
			!req.body.password
		)
			return res.send({
				error: `Please enter all required fields`,
				success: false,
			});

		//check if user exists
		const userExists = await UserModel.findOne({ email: req.body.email });
		if (userExists)
			return res.send({
				error: "Email already taken. Try registering with another email",
				success: false,
			});

		//Encrypt password
		const salt = await bcrypt.genSalt();
		const hashedPassword = await bcrypt.hash(req.body.password, salt);

		const user = new UserModel({
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			email: req.body.email,
			passwordHash: hashedPassword,
		});

		user
			.save()
			.then((userSaved) => {
				res.status(201).json({
					message: `YOUR ACCOUNT HAS BEEN SUCCESSFULLY CREATED`,
					success: true,
				});
			})
			.catch((error) => {
				res.json({ error: error, success: false });
			});
	} catch (error) {
		res.json({ error: error.message, success: false });
	}
});

//Update user
router.patch("/:id", async (req, res) => {
	try {
		const body = req.body;
		const user = await UserModel.findById(req.params.id);

		if (!user)
			return res.send({
				error: `User not found`,
				success: false,
			});

		await UserModel.updateOne(
			{ _id: req.params.id },
			{
				$set: {
					firstName: req.body.firstName || user.firstName,
					lastName: req.body.lastName || user.lastName,
					passwordHash: body.passwordHash || user.passwordHash,
					university: req.body.university || user.university,
					gender: req.body.gender || user.gender,
					city: req.body.city || user.city,
					country: req.body.country || user.country,
					maritalStatus: req.body.maritalStatus || user.maritalStatus,
					countryCode: req.body.countryCode || user.countryCode,
					phone: req.body.phone || user.phone,
				},
			}
		);

		return res.send({
			message: "User details updated",
			success: true,
		});
	} catch (error) {
		res.status(500).json({ error: error, success: false });
	}
});

//Get followers for one user
router.get("/followers/:id", async (req, res) => {
	try {
		const user = await UserModel.findById(req.params.id)
			.select("followers")
			.populate("following");

		if (!user)
			return res.send({
				error: `User not found`,
				success: false,
			});
		res.send({ message: user, success: true });
	} catch (error) {
		res.json({ error: error, success: false });
	}
});

//Get following for one user
router.get("/following/:id", async (req, res) => {
	try {
		const user = await UserModel.findById(req.params.id)
			.select("following")
			.populate("following");

		if (!user)
			return res.send({
				error: `User not found`,
				success: false,
			});
		res.send({ message: user, success: true });
	} catch (error) {
		res.json({ error: error, success: false });
	}
});

//Follow a user
router.patch("/following/:id", async (req, res) => {
	try {
		const follower = await UserModel.findById(req.params.id);
		if (!follower)
			return res.send({
				error: `User not found`,
				success: false,
			});

		const followed = await UserModel.findById(req.body.id);
		if (!followed)
			return res.send({
				error: `User not found`,
				success: false,
			});

		// get  & update following array
		// const followingArray = follower.following.map(elem => JSON.stringify(elem));

		const followingObjArray = follower.following;
		const followingArray = followingObjArray.map((elem) =>
			JSON.stringify(elem)
		);
		// followingArray.map((elem) => console.log(elem));
		// console.log(req.body.id);

		if (followingArray.indexOf(req.body.id) !== -1) {
			return res.send({
				message: "You are already following this user",
				success: false,
			});
		}
		followingObjArray.push(req.body.id);
		const cleanfollowingArray = [new Set(followingObjArray)];

		console.log(cleanfollowingArray);
		UserModel.findOneAndUpdate(
			{ _id: req.params.id },
			{ $set: { following: cleanfollowingArray } },
			{ new: true },
			(err, doc) => {
				if (err) {
					console.log("Something wrong when updating data!");
				}

				console.log(doc);
			}
		);

		// get  & update following array
		const followedArray = followed.following;
		followedArray.push(req.params.id);
		const cleanfollowedArray = [new Set(followedArray)];
		UserModel.findOneAndUpdate(
			{ _id: req.body.id },
			{ $set: { following: cleanfollowedArray } },
			{ new: true },
			(err, doc) => {
				if (err) {
					console.log("Something wrong when updating data!");
				}

				console.log(doc);
			}
		);

		res.send({ message: "Followed User", success: true });
	} catch (error) {
		res.json({ error: error, success: false });
	}
});

module.exports = router;
