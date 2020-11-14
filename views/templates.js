const nav = () => `
<ul id="nav">
    <li> <a href="/">Home</a> </li>
    <li> <a href="/blog">Blog</a> </li>
    <li> <a href="/admin">Admin</a> </li>
</ul>`

const adminNav = () => `
<ul id="nav" class="admin">
    <li> <a href="/">Home</a> </li>
    <li> <a href="/blog">Blog</a> </li>
    <li> <a href="/admin/post/create">New Post</a> </li>
</ul>`

const head = ({title, styles}) => `<head>
    <title>${title}</title>
    <link rel="stylesheet" href="${styles}"/>
    <link rel="stylesheet" href="/assets/nav.css"/>
</head>`

module.exports = {
    head, 
    nav,
    adminNav
}