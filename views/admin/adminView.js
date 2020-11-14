const {adminNav, head} = require("../templates")

const adminView = (posts) => `
    <html>
        ${head({title: "Blog"})}
        <body>
            ${adminNav()}
            <div class="main-page">
                <div class="wrapper">
                    <h1> Admin Dashboard </h1>
                    <h2> Current Posts </h2>
                    <div id="post-container" class="admin-container">
                        ${posts.map(post => `
                        <div class="post-item">
                            <form method="POST" action="/admin/post/${post.id}?_method=DELETE">
                                <button id="del-btn">X</button>
                            </form>
                            <h1> <a href="/blog/${post.dataValues.id}">${post.dataValues.title}</a></h1>
                            
                            <h3>${post.dataValues.author}</h3>
                            <p>${post.dataValues.title}</p>
                            <p>${post.dataValues.content.split(" ").slice(0, 10).join(" ")}...</p>
                            <h4>Posted: ${post.dataValues.createdAt.toDateString()}</h4>
                        </div>
                        `).join("")}
                    </div>
                </div>
            </div>
        </body>
    </html>
`;

module.exports = adminView;