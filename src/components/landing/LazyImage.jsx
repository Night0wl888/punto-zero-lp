import { useState } from "react";

export default function LazyImage({ src, alt, className, style }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full h-full">
      {/* Blurred placeholder */}
      {!loaded && (
        <div
          className="absolute inset-0"
          style={{
            background: "#1a1612",
            filter: "blur(12px)",
          }}
        />
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={className}
        style={{
          ...style,
          transition: "opacity 0.6s ease",
          opacity: loaded ? 1 : 0,
        }}
      />
    </div>
  );
}