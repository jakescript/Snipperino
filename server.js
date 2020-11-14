const express = require("express");
const app = express();
const path = require("path");
const {conn, seed, models: { Post }} = require("./db");

const adminRoutes = require("./routes/admin");
const blogRoutes = require("./routes/blog");

const homeView = require("./views/home")

app.use(require("method-override")("_method"));
app.use("/assets", express.static(path.join(__dirname, "assets")));
app.use(express.urlencoded({extended: false}));
app.use(require("morgan")("dev"));


app.use("/admin", adminRoutes);
app.use("/blog", blogRoutes);

app.get("/", (req, res, next) => {
    res.send(homeView());
});

const init = async () => {
    try {
        await conn.authenticate();
        // await seed();
        app.listen(process.env.PORT || 3000, () => console.log("Listening"));
    } catch (error) {
        console.log(error);
    };
};

init();