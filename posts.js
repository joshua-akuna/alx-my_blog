const fs = require("fs")
const config = require("./config")
const createPost = require("./createPost")

const posts = fs.readdirSync(config.dev.postsdir).map(
    post => post.slice(0, -3)).map(post=> createPost(post))

module.exports = posts