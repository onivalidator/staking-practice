import Image, { ImageProps } from 'next/image'
import React from 'react'

interface TintedImageProps extends ImageProps {
  tintColor: string
}

export const TintedImage: React.FC<TintedImageProps> = ({ tintColor, ...props }) => {
  return (
    <div className="relative">
      <Image {...props} />
      <div 
        className="absolute inset-0" 
        style={{ backgroundColor: tintColor, mixBlendMode: 'multiply', opacity: 0.5 }}
      ></div>
    </div>
  )
}
