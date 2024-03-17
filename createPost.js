const config = require("./config")
const fm = require("front-matter")
const marked = require("marked")
const fs = require("fs")

const createPost = path => {
    // reads the content to the markdown path directory in utf8
    const post = fs.readFileSync(`${config.dev.postsdir}/${path}.md`, "utf8")
    // extracts the frontmatter content of the markdown file
    const content = fm(post)
    console.log(content)
    console.log("POST")
}

module.exports = createPost