import { NextPage } from 'next';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { SEO } from '../components/seo';
import { DefaultLayout } from '../layouts/default-layout';

const CoursesPage: NextPage = () => (
  <DefaultLayout>
    <SEO title="Courses" />

    <Container>
      <Row>
        <Col xs="12" md="8" lg="6" className="offset-md-1 mb-4 mb-lg-0">
          <h1>sjkdhskdjh</h1>
        </Col>
        <Col xs="12" md="8" lg="6">sdjkfhsdkjfhM</Col>
        <Card>
          <Card.Body>
            sdfkjdslfkj
          </Card.Body>
        </Card>
      </Row>
    </Container>
  </DefaultLayout>
);

export default CoursesPage;
