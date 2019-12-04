import Link from 'next/link';
import React from 'react';
import Card from 'react-bootstrap/Card';

interface Props {
  img: any;
  title: string;
  body: string;
  buttonText: string;
  buttonLink: string;
}

export const CourseCard: React.FC<Props> = ({ img, title, body, buttonText, buttonLink }) => (
  <Card className="shadow-lg rounded-lg">
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text>{body}</Card.Text>
    <div className="buttonSpacer" />
    <Link href={buttonLink}><a className="absoluteButton btn btn-sm btn-secondary">{buttonText}</a></Link>
  </Card.Body>

  <style jsx>{`
    .buttonSpacer {
      height: 31px;
    }
    .absoluteButton {
      position: absolute;
      bottom: 20px;
    }
  `}</style>
</Card>
);
