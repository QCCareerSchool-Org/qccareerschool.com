import Image from 'next/image';
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

  const maxHeight = 600;
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

  let width = picture.width;
  let height = picture.height;
  if (width > maxWidth) {
    width = maxWidth;
    height = picture.height / picture.width * maxWidth;
  }
  if (height >= maxHeight) {
    height = maxHeight;
    width = picture.width / picture.height * 600;
  }

  return (
    <div className="lightbox">
      <div className="close" onClick={onClose}><IoIosCloseCircle size={40} /></div>
      <div className="wrapper">
        <div className="imageWrapper">
          <Image className="portfolioImage" src={`https://studentcenter.qccareerschool.com/public/view-image.php?id=${picture.id}&maxwidth=${maxWidth}&maxheight=${maxHeight}`} width={width} height={height} layout="fixed" alt="" />
        </div>
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
        .imageWrapper {
          width: 100%;
          max-width: ${maxWidth}px;
          max-height: 600px;
        }
        .wrapper h6 {
          margin-top: 1rem;
        }
      `}</style>
    </div>
  );
};
