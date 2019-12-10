import { useContext } from 'react';
import { IoIosCloseCircle } from 'react-icons/io';

import { ScreenWidthContext } from '../providers/screen-width';

interface Props {
  id?: number;
  onClose: () => void;
}

export const LightBox: React.FC<Props> = ({ id, onClose }) => {
  const screenWidth = useContext(ScreenWidthContext);
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

  if (!id) {
    return null;
  }

  return (
    <div className="lightbox">
      <div className="close" onClick={onClose}><IoIosCloseCircle size={40} /></div>
      <img className="portfolioImage" src={`https://studentcenter.qccareerschool.com/public/view-image.php?id=${id}&maxwidth=${maxWidth}&maxheight=600`} />
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
        .portfolioImage {
          border: 3px solid white;
          position: relative;
          top: ${top}px;
          max-width: ${maxWidth}px;
        }
      `}</style>
    </div>
  );
};
