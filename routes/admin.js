const express = require("express");
const router = express.Router();
const {models: { Post }} = require("../server/db");

router.get("/posts", async(req, res, next) => {
    try {
        const postList = await Post.findAll();
        if(postList.length >= 1){
            res.status(200).send(postList)
        }else{
            res.send("No Posts")
        };
    } catch (error) {
        next(error);
    };
});

router.post("/posts", async(req, res, next) => {
    try {

        const {title, author, content} = req.body
        const post = await Post.create({
            title,
            content

        });

        res.send(post)
    } catch (error) {
        next(error)
    };
});

router.get("/posts/:id", async(req, res, next) => {
    const post = [await Post.findByPk(req.params.id)];
    res.send(post[0].dataValues);
});

router.delete("/posts/:id", async (req, res, next) => {
    try {
        const post = await Post.findByPk(req.params.id);
        await post.destroy()
        res.send(post);
    } catch (error) {
        next(error)
    };
});

module.exports = router;
