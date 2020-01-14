import Link from 'next/link';
import React from 'react';
import Card from 'react-bootstrap/Card';

interface Props {
  img: any;
  title: string;
  body?: string;
  buttonText: string;
  link: string;
  externalLink?: boolean;
  alt: string;
}

export const CourseCard: React.FC<Props> = ({ img, title, body, buttonText, link, externalLink, alt }) => (
  <Card className="shadow-lg rounded-lg">
    {externalLink
      ? <a href={link}><Card.Img variant="top" src={img} alt={alt} /></a>
      : <Link href={link}><a><Card.Img variant="top" src={img} alt={alt} /></a></Link>
    }
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      {body ? <Card.Text>{body}</Card.Text> : null}
      <div className="buttonSpacer" />
      {externalLink
        ? <a href={link} className="absoluteButton btn btn-sm btn-secondary">{buttonText}</a>
        : <Link href={link}><a className="absoluteButton btn btn-sm btn-secondary">{buttonText}</a></Link>
      }
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
