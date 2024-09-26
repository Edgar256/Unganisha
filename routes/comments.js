const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const UserModel = require("../models/User.model");
const roles = require("../constants/roles");
const PostModel = require("../models/Post.model");
const CommentModel = require("../models/Comment.model");

//Get all comments
router.get("/", async (req, res) => {
  try {
    const CommentsList = await CommentModel.find();
    return res.status(200).send({ message: CommentsList, success: true });
  } catch (error) {
    return res.send({ error: error, success: false });
  }
});

//Count all comments
router.get("/get/count", async (req, res) => {
  try {
    CommentModel.countDocuments({}, (error, count) => {
      if (error) return res.json({ error: error, success: false });
      res.status(200).json({ count, success: true });
    });
  } catch (error) {
    res.json({ error: error, success: false });
  }
});

//Get one comment
router.get("/:id", async (req, res) => {
  try {
    const comment = await CommentModel.findById(req.params.id);

    if (!comment)
      return res.send({
        message: `Comment not found`,
        success: false,
      });
    return res.send({ message: comment, success: true });
  } catch (error) {
    res.json({ error: error, success: false });
  }
});

//Get all comments from one post
router.get("/post/:id", async (req, res) => {
  try {
    // check if post exists
    const post = await PostModel.findById(req.params.id);
    if (!post)
      return res.send({
        message: `Post not found`,
        success: false,
      });

    const commentsList = await CommentModel.find({ post: req.params.id });
    return res.send({ message: commentsList, success: true });
  } catch (error) {
    res.json({ error: error, success: false });
  }
});

//Create a Comment
router.post("/", async (req, res) => {
  try {
    // Check for input
    if (!req.body.author && !req.body.text && !req.body.post)
      return res.send({
        error: `Please enter all fields`,
        success: false,
      });

    //check if user exists
    const userExists = await UserModel.findById(req.body.author);
    if (!userExists)
      return res.send({
        message: "User not found",
        success: false,
      });

    //check if user exists
    const postExists = await PostModel.findById(req.body.post);
    if (!postExists)
      return res.send({
        message: "Post not found",
        success: false,
      });

    const comment = new CommentModel({
      author: req.body.author,
      post: req.body.post,
      text: req.body.text,
    });

    let currentComment;
    comment
      .save()
      .then((savedComment) => (commentsArray = savedComment))
      .then(function () {
        const commentsArray = postExists.comments;
        commentsArray.push(commentsArray);
        PostModel.findOneAndUpdate(
          { _id: req.body.post },
          { $set: { comments: commentsArray } },
          { new: true },
          (err, doc) => {
            if (err) {
              console.log("Something wrong when updating data!");
            }

            res.send(currentComment);
          }
        );
      });
  } catch (error) {
    res.json({ error: error.message, success: false });
  }
});

//Edit a Comment
router.patch("/:id", async (req, res) => {
  try {
    // Check if comment exists
    const commentExists = await CommentModel.findById(req.params.id);
    if (!commentExists)
      return res.send({
        error: "Comment not found",
        success: false,
      });
    const commentText = req.body.text;
    PostModel.findOneAndUpdate(
      { _id: req.params.id },
      { $set: { text: commentText } },
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

//Delete a Comment
router.delete("/:id", async (req, res) => {
  try {
    // Check if post exists
    const commentExists = await CommentModel.findById(req.params.id);

    if (!commentExists)
      return res.send({
        message: "Comment not found",
        success: false,
      });
    const postID = commentExists.post;

    const post = await PostModel.findById(postID);
    const postComments = post.comments;

    const commentsArray = postComments.map((comment) => comment.toString());
    let index;
    if (!commentsArray.includes(req.params.id)) {
      return res.send({ message: "Comment not found", success: false });
    } else {
      index = commentsArray.indexOf(req.params.id);
    }
    postComments.splice(index, 1);
    // console.log(userPosts, index);

    PostModel.updateOne(
      { _id: authorID },
      { $set: { comments: postComments } },
      { new: true },
      (err, doc) => {
        if (err) {
          console.log("Something wrong when updating data!");
        }
        // console.log(doc);
      }
    );

    CommentModel.findOneAndDelete(
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
    return res.send({ message: "Comment has been deleted", success: true });
  } catch (error) {
    res.json({ error: error.message, success: false });
  }
});

module.exports = router;
