const {adminNav, head} = require("../templates")

const createPostView = () => `
    <html>
        ${head({title: "Blog", styles: "/assets/admin.css"})}
        <body>
            ${adminNav()}
            <h1> New Blog Post </h1>
            <div id="form-container">
                <form method="POST" action="/admin/post/create" enctype="multipart/form-data">
                    <div class="input-block">
                        <label for="title">Title</label>
                        <input name="title" id="title" />
                    </div>
                    <div class="input-block">
                        <label for="author">Author</label>
                        <input name="author" id="author" />
                    </div>
                    <div class="input-block">
                        <label for="content">Content</label>
                        <textarea name="content" id="content"> </textarea>
                    </div>

                    <div class="input-block">
                        <label for="image">Image</label>
                        <input id="image" name="thumbnail" type="file"/>
                    </div>
                    <button id="create-btn"> Create Post </button>
                </form>
            </div>
        </body>
    </html>
`;

module.exports = createPostView;