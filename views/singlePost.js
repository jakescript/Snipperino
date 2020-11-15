const {nav, head} = require("./templates")

const hasImage = (post) => {
    if(post.thumbnail) {
        return `<img src="data:image/jpeg;base64, ${post.thumbnail.toString("base64")}"/>`
    }

    return `<div></div>`
}

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
                    ${hasImage(post)}
                </div>
            </div>
        </body>
    </html>
`;

module.exports = singlePost;