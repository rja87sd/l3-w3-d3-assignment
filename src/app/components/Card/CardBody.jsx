import CardImage from "./CardImage";

export default function CardBody({ title, desc, src, alt }) {
  return (
    <div className="px-6 py-4">
      <h2 className="font-bold text-xxl mb-2">{title}</h2>
      <CardImage src={src} alt={alt} />
      <p className="text-gray-700">{desc}</p>
    </div>
  );
}
