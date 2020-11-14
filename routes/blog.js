const express = require("express");
const router = express.Router();
const {models: { Post }} = require("../db");

const postView = require("../views/postList");
const singlePostView = require("../views/singlePost");

router.get("/", async(req, res, next) => {
    const postList = await Post.findAll()
    res.send(postView(postList))
});

router.get("/:id", async(req, res, next) => {
    const post = [await Post.findByPk(req.params.id)];
    res.send(singlePostView(post[0].dataValues));
});

module.exports = router;