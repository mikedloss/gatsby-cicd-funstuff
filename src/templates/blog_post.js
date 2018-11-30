import React from 'react'
import { Link, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Layout from '../components/layout'

const propTypes = {
    data: PropTypes.shape({
        datoCmsBlogPost: PropTypes.shape({
            title: PropTypes.string.isRequired,
            bodyContent: PropTypes.string.isRequired,
            slugslug: PropTypes.string.isRequired
        })
    })
}

class BlogPostTemplate extends React.Component {
    render() {
        const { data } = this.props
        const { title, bodyContent } = data.datoCmsBlogPost
        console.log(title)
        return (
            <Layout>
                <h1>{title}</h1>
                <p>{bodyContent}</p>
                <Link to="/">Return to homepage</Link>
            </Layout>
        )
    }
}

export const pageQuery = (something) => {
    console.log(something)
    return graphql`
    query GetBlogPostData($title: String) {
        datoCmsBlogPost(title: { eq: $title }) {
            title
            bodyContent
            slugslug
        }
    }
`   
}

export default BlogPostTemplate

BlogPostTemplate.propTypes = propTypes