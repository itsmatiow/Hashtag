import React, { useState } from "react";

export default function LazyImage({
  src,
  alt,
  className,
  style,
  loading = "lazy",
  ...props
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      onLoad={() => setIsLoaded(true)}
      style={style}
      // تا زمانی که لود نشده تار و نامرئیه، لود که شد شفاف میشه
      className={`transition-all duration-500 ease-in-out ${
        isLoaded ? "blur-0 opacity-100" : "opacity-0 blur-xl"
      } ${className}`}
      {...props}
    />
  );
}
