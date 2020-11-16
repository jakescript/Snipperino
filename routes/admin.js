const express = require("express");
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const {models: { Post }} = require("../db");

const createPostView = require("../views/admin/createPost");
const adminView = require("../views/admin/adminView");


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null,"temp")
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname + "-" + Date.now());
    }
});

const upload = multer({storage: storage});

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

router.post("/post/create", upload.single("thumbnail"), async(req, res, next) => {
    try {
        const file = req.file;
        console.log(file)
        if(!file){
            const err = new Error("Please Upload A File");
            err.httpStatusCode = 400;
            return next(err);
        };

        const img = fs.readFileSync(file.path);
        const encodedImg = img.toString("base64");

        const {title, author, content} = req.body
        await Post.create({
            title,
            author,
            content,
            thumbnail: Buffer.from(encodedImg, "base64")
        });

        await fs.unlinkSync(file.path);
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