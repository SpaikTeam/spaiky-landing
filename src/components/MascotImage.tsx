import Image from "next/image";

type MascotImageProps = {
  src: string;
  alt: string;
  size: number;
  className?: string;
};

export default function MascotImage({
  src,
  alt,
  size,
  className = "",
}: MascotImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={`drop-shadow-[0_0_32px_rgba(124,58,237,0.45)] ${className}`}
      draggable={false}
      priority
    />
  );
}
