const {adminNav, head} = require("../templates")

const createPostView = () => `
    <html>
        ${head({title: "Blog"})}
        <body>
            ${adminNav()}
            <h1> New Blog Post </h1>
            <div id="form-container">
                <form method="POST" action="/admin/post/create">
                    <input name="title" placeholder="title"/>
                    <input name="author" placeholder="author"/>
                    <input name="content" placeholder="body"/>

                    <button> Create Post </button>
                </form>
            </div>
        </body>
    </html>
`;

module.exports = createPostView;