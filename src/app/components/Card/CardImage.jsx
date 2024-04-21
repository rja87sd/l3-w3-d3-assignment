import Image from "next/image";

export default function CardImage({ src, alt }) {
  return (
    <div>
      <Image width={"500"} height={"500"} src={src} alt={alt} />
    </div>
  );
}
