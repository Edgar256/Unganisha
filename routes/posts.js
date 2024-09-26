const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const UserModel = require("../models/User.model");
const roles = require("../constants/roles");
const PostModel = require("../models/Post.model");

//Get all posts
router.get("/", async (req, res) => {
  try {
    const PostsList = await PostModel.find().populate("author");
    return res.status(200).send({ message: PostsList, success: true });
  } catch (error) {
    return res.send({ error: error, success: false });
  }
});

//Count all posts
router.get("/get/count", async (req, res) => {
  try {
    PostModel.countDocuments({}, (error, count) => {
      if (error) return res.json({ error: error, success: false });
      res.status(200).json({ count, success: true });
    });
  } catch (error) {
    res.json({ error: error, success: false });
  }
});

//Get one post
router.get("/:id", async (req, res) => {
  try {
    const post = await PostModel.findById(req.params.id);

    if (!post)
      return res.send({
        error: `Post not found`,
        success: false,
      });
    res.send({ message: post, success: true });
  } catch (error) {
    res.json({ error: error, success: false });
  }
});

//Get all posts from one user
router.get("/users/:id", async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    if (!user)
      return res.send({
        error: `User not found`,
        success: false,
      });
    const posts = await PostModel.find({ author: req.params.id });
    return res.send({ message: posts, success: true });
  } catch (error) {
    res.json({ error: error, success: false });
  }
});

//Create a Post
router.post("/", async (req, res) => {
  try {
    // Check for input
    if (
      !req.body.author &&
      !req.body.text &&
      !req.body.image &&
      !req.body.video
    )
      return res.send({
        error: `Please enter at atlest one field`,
        success: false,
      });

    //check if user exists
    const userExists = await UserModel.findById(req.body.author);
    if (!userExists)
      return res.send({
        error: "User not found",
        success: false,
      });

    const post = new PostModel({
      author: req.body.author,
      text: req.body.text,
      image: req.body.image,
      video: req.body.video,
    });

    let currentPost;
    post
      .save()
      .then((savedPost) => (currentPost = savedPost))
      .then(function () {
        console.log("do next", currentPost);
        const postsArray = userExists.posts;
        postsArray.push(currentPost);
        UserModel.findOneAndUpdate(
          { _id: req.body.author },
          { $set: { posts: postsArray } },
          { new: true },
          (err, doc) => {
            if (err) {
              console.log("Something wrong when updating data!");
            }

            res.send(currentPost);
          }
        );
      });
  } catch (error) {
    res.json({ error: error.message, success: false });
  }
});

//Edit a Post
router.patch("/:id", async (req, res) => {
  try {
    // Check if post exists
    const postExists = await PostModel.findById(req.params.id);
    if (!postExists)
      return res.send({
        error: "Post not found",
        success: false,
      });
    const postText = req.body.text;
    PostModel.findOneAndUpdate(
      { _id: req.params.id },
      { $set: { text: postText } },
      { new: true },
      (err, doc) => {
        if (err) {
          console.log("Something wrong when updating data!");
        }

        return res.send({ message: doc, success: true });
      }
    );
  } catch (error) {
    res.json({ error: error.message, success: false });
  }
});

//Delete a Post
router.delete("/:id", async (req, res) => {
  try {
    // Check if post exists
    const postExists = await PostModel.findById(req.params.id);

    if (!postExists)
      return res.send({
        message: "Post not found",
        success: false,
      });
    const authorID = postExists.author;

    const user = await UserModel.findById(authorID);
    const userPosts = user.posts;

    const postsArray = userPosts.map((post) => post.toString());
    let index;
    if (!postsArray.includes(req.params.id)) {
      return res.send({ message: "Post not found", success: false });
    } else {
      index = postsArray.indexOf(req.params.id);
    }
    userPosts.splice(index, 1);
    // console.log(userPosts, index);

    UserModel.updateOne(
      { _id: authorID },
      { $set: { posts: userPosts } },
      { new: true },
      (err, doc) => {
        if (err) {
          console.log("Something wrong when updating data!");
        }
        // console.log(doc);
      }
    );

    PostModel.findOneAndDelete(
      { _id: req.params.id },
      { new: true },
      (err, doc) => {
        if (err) {
          console.log("Something wrong when updating data!");
        }
        // console.log(doc);
        // return res.send(doc);
      }
    );
    return res.send({ message: "Post has been deleted", success: true });
  } catch (error) {
    res.json({ error: error.message, success: false });
  }
});

module.exports = router;
