import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Carousel from "../components/carousel"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
    <Container className="text-center">
      <Row>
        <Col md={{ span: 10, offset: 1 }}><Carousel /></Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
