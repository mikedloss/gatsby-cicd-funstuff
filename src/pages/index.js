import React from 'react'
import PropTypes from 'prop-types';
import { Link, StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const pageQuery = graphql`
  {
    allDatoCmsBlogPost{
      edges {
        node {
          title
          bodyContent
          slugslug
        }
      }
    }
  }
`

const Index = ({ data }) => {
  const posts = data.allDatoCmsBlogPost.edges
  console.log(posts)
  return (
    <Layout>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
        <Image />
      </div>
      {posts.map((post, index) => (
        <div key={index}>
          <Link to={`/blog/${post.node.slugslug}/`}>{post.node.title}</Link>
        </div>
      ))}
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

const IndexPage = () => {
  return (
    <StaticQuery 
      query={pageQuery}
      render={data => <Index data={data} />}
    />
  )
}

export default IndexPage;

Index.propTypes = {
  data: PropTypes.object.isRequired
}