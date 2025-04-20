"use client";

import { useEffect } from "react";
import { QRCodeSVG } from "qrcode.react";

export default function QRCodeModal({
  qrLink,
  onClose,
}: {
  qrLink: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return (
    <div className="qr-modal">
      <div className="qr-content">
        <h4>Scan the QR Code</h4>
        <QRCodeSVG value={qrLink} size={200} />
        <p>Scan this code to view the project details on your device.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}