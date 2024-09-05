import Image, { ImageProps } from 'next/image';
import { CSSProperties } from 'react';

interface TintedImageProps extends ImageProps {
  tintColor: string;
}

const TintedImage: React.FC<TintedImageProps> = ({ tintColor, ...props }) => {
  const tintStyle: CSSProperties = {
    filter: `brightness(0) saturate(100%) invert(19%) sepia(92%) saturate(7075%) hue-rotate(359deg) brightness(98%) contrast(100%)`,
  };

  return (
    <div style={{ position: 'relative', width: props.width, height: props.height }}>
      <Image {...props} style={{ ...props.style, ...tintStyle }} />
    </div>
  );
};

export default TintedImage;