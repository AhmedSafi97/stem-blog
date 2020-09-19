const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode })

    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

exports.createPages = ({ actions }) => {
  const { createPage } = actions
  const categories = ["science", "technology", "engineering", "mathematics"]

  categories.forEach(category =>
    createPage({
      path: path.join(category),
      component: path.resolve("./src/templates/categoryPage.js"),
      context: {
        category,
      },
    })
  )
}
