import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { Container, Row, Col } from 'react-bootstrap';

const FeaturedPage = ({ data }) => {
  if (!data || !data.allWordpressPost) {
    return null;
  }

  const posts = data.allWordpressPost.edges;

  if (!posts) {
    return null;
  }

  return (
    <Layout>
      <SEO title="Home" />
      <Container className="mt-5">
        <Row>
          <Col md="12">
            <h1>Featured Posts</h1>
          </Col>
          {posts.map(post => {
            const { node } = post;

            return (
              <Col md="12" key={node.id}>
                <Link to={node.path}>
                  <h3>{node.title}</h3>
                </Link>
                <p className="text-muted">
                  by {node.author.name} on {node.date}
                </p>
              </Col>
            );
          })}
        </Row>
      </Container>
    </Layout>
  );
};

FeaturedPage.displayName = 'FeaturedPage';
FeaturedPage.propTypes = {
  data: PropTypes.object
};

export default FeaturedPage;

export const pageQuery = graphql`
  query RecentPostQuery {
    allWordpressPost(sort: { fields: [date], order: [DESC] }) {
      totalCount
      edges {
        node {
          date
          path
          title
          content
          author {
            name
          }
        }
      }
    }
  }
`;
