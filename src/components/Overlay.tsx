import type { FC } from 'react';

interface Props {
  opacityTop?: number;
  opacityBottom?: number;
}

export const Overlay: FC<Props> = ({ opacityTop = 0.45, opacityBottom = opacityTop }) => (
  <>
    <div className="overlay" />
    <style jsx>{`
    .overlay {
      box-sizing:border-box;
      display:block;
      overflow:hidden;
      width:initial;
      height:initial;
      border:0;
      margin:0;
      padding:0;
      position:absolute;
      top:0;
      left:0;
      bottom:0;
      right:0;
      background: linear-gradient(rgba(0, 0, 0, ${opacityTop}), rgba(0, 0, 0, ${opacityBottom}));
      background-size: cover;
    }
  `}</style>
  </>
);
