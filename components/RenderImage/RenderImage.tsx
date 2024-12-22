'use client';

import type { ImageProps } from 'next/image';
import Image from 'next/image';
import type { FC } from 'react';
import { useEffect, useState } from 'react';

import { IMAGE_PATH } from '@/common/constants/constant';

interface IRenderImage extends Omit<ImageProps, 'width' | 'height' | 'alt'> {
  src: string;
  className?: string;
  alt: string;
  width?: number;
  height?: number;
  [key: string]: unknown;
}

export const RenderImage: FC<IRenderImage> = ({
  className,
  src,
  alt,
  width = Number.MAX_SAFE_INTEGER,
  height = Number.MAX_SAFE_INTEGER,
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState<string>(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  const handleImageError = () => {
    setImgSrc(`${IMAGE_PATH}/IT.jpg`);
  };

  return (
    <Image
      {...props}
      width={width}
      height={height}
      alt={alt}
      src={imgSrc}
      className={className}
      onError={handleImageError}
    />
  );
};
