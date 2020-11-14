const {nav, head} = require("./templates")

const singlePost = (post) => `
    <html>
        ${head({title: "Blog", styles: "/assets/styles.css"})}
        <body>
            ${nav()}
            <h1> Blog Posts </h1>
            <div id="post-container">
                <div id="post-item">
                    <h1>${post.title}</h1>
                    <h3>${post.author}</h3>
                    <p>${post.content}</p>
                    <p>${post.createdAt}</p>
                </div>
            </div>
        </body>
    </html>
`;

module.exports = singlePost;