import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="Not Found" />
    <Container className="mt-5">
      <Row>
        <Col md="12">
          <h1>Not Found</h1>
          <p>Sorry, this URL is not valid.</p>
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default NotFoundPage;