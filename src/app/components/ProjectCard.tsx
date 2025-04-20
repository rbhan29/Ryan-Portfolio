"use client";

import { useState } from "react";
import QRCodeModal from "./QRCodeModal";

export default function ProjectCard({
  title,
  description,
  qrLink,
  image,
}: {
  title: string;
  description: string;
  qrLink: string;
  image: string;
}) {
  const [showQR, setShowQR] = useState(false);

  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={() => setShowQR(true)}>View Project</button>
      {showQR && <QRCodeModal qrLink={qrLink} onClose={() => setShowQR(false)} />}
    </div>
  );
}