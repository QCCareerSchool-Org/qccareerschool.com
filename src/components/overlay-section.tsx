import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { Bar } from './bar';

const OverlaySection: React.FC<{ backgroundImage: string; }> = ({ children, backgroundImage }) => (
  <section className="overlay-section bg-dark text-light text-shadow text-right">
    <Container>
      <Row>
        <Col xs={12} md={8} className="offset-md-4">
          <Bar className="text-primary ml-auto" />
          {children}
        </Col>
      </Row>
    </Container>

    <style jsx>{`
      section {
        background: url(${backgroundImage}) 0 0;
        background-size: cover;
      }
    `}</style>
  </section>
);

export default OverlaySection;
