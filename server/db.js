const Sequelize = require("sequelize");
const { STRING, INTEGER, TEXT, BLOB} = Sequelize;
const faker = require("faker");

const conn = new Sequelize('cms', 'jacob', 'captincarl69', {
    host: 'localhost',
    dialect: 'postgresql',
    logging: false
});

const Post = conn.define("Post", {
    title: STRING,
    content: TEXT,
});

const seed = async () => {
    await conn.sync({force: true, logging: false})

    await Promise.all([
        Post.create({title: "Hello World", content: "console.log('hello world')"}),
        Post.create({title: "Silly Goose", content: "console.log('hey dummy')"}),
        Post.create({title: "Poop Function", content: "function() { const poop = 'poop'}"})
    ])
};

module.exports = {
    conn,
    seed,
    models: {
        Post
    }
}
