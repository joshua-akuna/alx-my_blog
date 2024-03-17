const config = require("./config")
const fm = require("front-matter")
const marked = require("marked")
const fs = require("fs")

const createPost = path => {
    const post = fs.readFileSync(`${config.dev.postsdir}/${path}.md`, "utf8")
    const content = post
    console.log(content)
    console.log("POST")
}

module.exports = createPost