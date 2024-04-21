"use client";

import CardBody from "./CardBody";

export default function CardMain({ title, desc, src, alt }) {
  return (
    <div className="h-72 mx-5 my-5 rounded overflow-y-scroll shadow-lg bg-white max-w-sm">
      <CardBody title={title} desc={desc} src={src} alt={alt} />
    </div>
  );
}
