const {nav, head} = require("./templates")

const homeView = () => `
    <html>
        ${head({title: "Blog", styles: "/assets/styles.css"})}
        <body>
            ${nav()}
            <h1> Welcome! </h1>
        </body>
    </html>
`;

module.exports = homeView;