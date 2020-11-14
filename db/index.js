const Sequelize = require("sequelize");
const { STRING, INTEGER, TEXT, DATE} = Sequelize;
const faker = require("faker");

const conn = new Sequelize(process.env.DATABASE_URL);

const Post = conn.define("Post", {
    title: STRING,
    author: STRING,
    content: TEXT
});

const destroyPost = (postId) => {
    const post = Post.findByPk(postId);
    post.destroy()
};

const seed = async () => {
    await conn.sync({force: true, logging: false})

    for(let i = 1; i <= 3; i++){
        await Post.create({
            title: faker.lorem.words(Math.floor(Math.random() * Math.floor(5)) + 1),
            author: faker.name.firstName(),
            content: faker.lorem.paragraph()
        });
    };
};

module.exports = {
    conn,
    seed,
    models: {
        Post
    },
    destroyPost
}