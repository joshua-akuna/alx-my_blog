const config = require("./config")
const { marked } = require("./marked")
const fm = require("front-matter")
const fs = require("fs")

const createPost = path => {
    // reads the content to the markdown path directory in utf8
    const post = fs.readFileSync(`${config.dev.postsdir}/${path}.md`, "utf8")
    // extracts the content of the markdown file as an object
    const content = fm(post)
    // converts the markdown content to HTML
    content.body = marked(content.body)
    content.path = path
    return content
}

module.exports = createPost