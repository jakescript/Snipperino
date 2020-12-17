const Sequelize = require("sequelize");
const { STRING, INTEGER, TEXT, BLOB} = Sequelize;
const faker = require("faker");

// "postgresql://localhost/cms"
const conn = new Sequelize(process.env.DATABASE_URL || "postgresql://localhost/cms", { logging: false });

const Post = conn.define("Post", {
    title: {
        type: STRING,
    },
    content: {
        type: STRING,
        allowNull: false
    },
}, {
    hooks: {
        beforeCreate: function(post){
            if(!post.title){
                post.title = "Mystery Snippet"
            }
        }
    }
});

const seed = async () => {
    await conn.sync({logging: false})
    await Promise.all([
        Post.create({title: "Hello World", content: "console.log('hello world')"})
    ])
};

module.exports = {
    conn,
    seed,
    models: {
        Post
    }
}
