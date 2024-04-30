import Link from 'next/link';
import { ReactElement, ReactNode } from 'react';

type Props = {
  imageComponent: ReactNode;
  title: string;
  body?: string;
  buttonText: string;
  link: string;
  externalLink?: boolean;
};

export const CourseCard = ({ imageComponent, title, body, buttonText, link, externalLink }: Props): ReactElement => {
  return (
    <div className="card shadow-sm rounded-sm">
      {externalLink
        ? <a href={link}>{imageComponent}</a>
        : <Link href={link}><a>{imageComponent}</a></Link>
      }
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        {body !== null && <p className="card-text">{body}</p>}
        <div className="buttonSpacer" />
        {externalLink
          ? <a href={link} className="absoluteButton btn btn-sm btn-secondary">{buttonText}</a>
          : <Link href={link}><a className="absoluteButton btn btn-sm btn-secondary">{buttonText}</a></Link>
        }
      </div>

      <style jsx>{`
      .buttonSpacer {
        height: 31px;
      }
      .absoluteButton {
        position: absolute;
        bottom: 20px;
      }
    `}</style>
    </div>
  );
};
