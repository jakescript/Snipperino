const {nav, head} = require("./templates")

const homeView = () => `
    <html>
        ${head({title: "Blog"})}
        <body>
            ${nav()}
            <h1> Welcome! </h1>
        </body>
    </html>
`;

module.exports = homeView;