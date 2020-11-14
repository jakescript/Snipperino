const express = require("express");
const router = express.Router();
const {models: { Post }} = require("../db");

const createPostView = require("../views/admin/createPost");
const adminView = require("../views/admin/adminView");


router.get("/", async(req, res, next) => {
    const postList = await Post.findAll()
    res.send(adminView(postList))
})

router.get("/blog/create", async(req, res, next) => {
    res.send(createPostView())
});

router.post("/blog/create", async(req, res, next) => {
    const {title, author, content} = req.body
    await Post.create({
        title,
        author,
        content
    });

    res.redirect("/blog");
});

module.exports = router;