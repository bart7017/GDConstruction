'use client';

import clsx from "clsx";
import Image, { ImageProps } from "next/image";
import React, { useState } from "react";

// `alt` est optionnel ici : les appelants s'appuient sur la valeur par defaut.
type BlurImageProps = Omit<ImageProps, "alt"> & { alt?: string };

export const BlurImage = ({ className, alt, ...rest }: BlurImageProps) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      className={clsx(
        "transition duration-500",
        isLoading ? "blur-sm scale-100" : " blur-0 scale-100",
        className
      )}
      onLoad={() => setLoading(false)}
      loading="lazy"
      decoding="async"
      alt={alt ? alt : "Avatar"}
      {...rest}
    />
  );
};
