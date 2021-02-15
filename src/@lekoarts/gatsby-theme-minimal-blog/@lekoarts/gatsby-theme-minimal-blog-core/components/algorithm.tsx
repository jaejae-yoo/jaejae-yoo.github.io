import React from "react"
import Blog from "../../../components/algorithm"

type Props = {
  data: {
    allPost: any
    [key: string]: string
  }
  [key: string]: any
}

export default function MinimalBlogCoreBlog({ ...props }: Props) {
  const {
    data: { allPost },
  } = props

  return <Blog posts={allPost.nodes} {...props} />
}
