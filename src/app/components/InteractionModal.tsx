"use client";

import { useState } from "react";

export default function InteractionModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="interaction-modal">
      <button onClick={() => setIsOpen(!isOpen)}>Open Interaction</button>
      {isOpen && (
        <div className="modal-content">
          <p>Try swiping or dragging this modal!</p>
        </div>
      )}
    </div>
  );
}