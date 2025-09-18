"use client";

import Image, { ImageProps } from "next/image";
import { useMemo, useState } from "react";

type SmartImageProps = ImageProps & {
  fallbackSrc?: string;
};

export default function SmartImage({ src, alt, fallbackSrc, ...rest }: SmartImageProps) {
  const [errored, setErrored] = useState(false);

  const safeSrc = useMemo(() => {
    if (!errored) return src;
    return (
      fallbackSrc ||
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1600&auto=format&fit=crop"
    );
  }, [errored, src, fallbackSrc]);

  return (
    <Image
      {...rest}
      alt={alt}
      src={safeSrc}
      onError={() => setErrored(true)}
    />
  );
}
