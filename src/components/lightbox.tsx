import { ReactElement } from 'react';
import { IoIosCloseCircle } from 'react-icons/io';
import { useScreenWidth } from '../hooks/useScreenWidth';

import { Picture } from '../models/picture';

type Props = {
  picture?: Picture;
  onClose: () => void;
};

export const LightBox = ({ picture, onClose }: Props): ReactElement | null => {
  const screenWidth = useScreenWidth();

  let maxWidth = 320;
  let top = 96;
  if (screenWidth >= 1200) {
    maxWidth = 1000;
    top = 120;
  } else if (screenWidth >= 992) {
    maxWidth = 800;
    top = 120;
  } else if (screenWidth >= 768) {
    maxWidth = 640;
  } else if (screenWidth >= 576) {
    maxWidth = 480;
  }

  if (!picture) {
    return null;
  }

  return (
    <div className="lightbox">
      <div className="close" onClick={onClose}><IoIosCloseCircle size={40} /></div>
      <div className="wrapper">
        <img className="portfolioImage" src={`https://studentcenter.qccareerschool.com/public/view-image.php?id=${picture.id}&maxwidth=${maxWidth}&maxheight=600`} />
        <h6>{picture.heading}</h6>
        <p>{picture.description}</p>
      </div>
      <style jsx>{`
        .lightbox {
          background: rgba(0,0,0,0.8);
          width: 100%;
          height: 100vh;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 100;
          text-align: center;
        }
        .close {
          cursor: pointer;
          color: white;
          position: absolute;
          top: 32px;
          right: 32px;
        }
        .wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          top: ${top}px;
          color: white;
          margin-left: 1rem;
          margin-right: 1rem;
        }
        .wrapper h6 {
          margin-top: 1rem;
        }
        .portfolioImage {
          display: block;
          border: 3px solid white;
          max-width: ${maxWidth}px;
        }
      `}</style>
    </div>
  );
};
