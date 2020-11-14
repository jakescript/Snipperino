const express = require("express");
const router = express.Router();
const {models: { Post }} = require("../db");

const createPostView = require("../views/admin/createPost");
const adminView = require("../views/admin/adminView");

router.get("/", async(req, res, next) => {
    try {
        const postList = await Post.findAll();
        if(postList.length >= 1){
            res.send(adminView(postList));
        }else{
            res.send("No Posts")
        };
    } catch (error) {
        next(error);
    };
});

router.get("/post/create", async(req, res, next) => {
    try {
        res.send(createPostView())
    } catch (error) {
        next(error)
    }
});

router.post("/post/create", async(req, res, next) => {
    try {
        const {title, author, content} = req.body
        await Post.create({
            title,
            author,
            content
        });

        res.redirect("/blog");
    } catch (error) {
        next(error)
    };
});

router.delete("/post/:id", async (req, res, next) => {
    try {
        const post = await Post.findByPk(req.params.id);
        await post.destroy()
        res.redirect("/admin");
    } catch (error) {
        next(error)
    };
});

module.exports = router;