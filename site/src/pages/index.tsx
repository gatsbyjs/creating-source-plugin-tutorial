import * as React from "react"
import { HeadFC, PageProps } from "gatsby"

export default function IndexPage({ data }: PageProps<any>): React.ReactElement {
  return (
    <main>
      <h1>All posts</h1>
      <section className="posts-grid">Posts will go here</section>
    </main>
  )
}

export const Head: HeadFC = () => (
  <React.Fragment>
    <title>Example Site</title>
    <link
      rel="icon"
      href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>🌈</text></svg>"
    />
  </React.Fragment>
)
