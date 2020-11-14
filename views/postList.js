const {nav, head} = require("./templates")

const postList = (posts) => `
    <html>
        ${head({title: "Blog"})}
        <body>
            ${nav()}
            <h1> Blog Posts </h1>
            <div id="post-container">
                ${posts.map(post => `
                <div class="post-item">
                    <h1> <a href="/blog/${post.dataValues.id}">${post.dataValues.title}</a></h1>
                    <h3>${post.dataValues.author}</h3>
                    <p>${post.dataValues.title}</p>
                    <p>${post.dataValues.content.split(" ").slice(0, 10).join(" ")}...</p>
                    <h4>Posted: ${post.dataValues.createdAt.toDateString()}</h4>
                </div>
                `).join("")}
            </div>
        </body>
    </html>
`;

module.exports = postList;