"use client";

import { useState, useEffect } from "react";

export default function AvatarChat() {
  const [currentMessage, setCurrentMessage] = useState(0);

  const messages = [
    "Hello, I am Raime - Ryan didnt want to use his real name , LoL!",
    "Ryan's projects are below.",
    "Go to the bottom to contact Ryan.",
    "How does this website look?",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 5000); // Change message every 5 seconds

    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <div className="avatar-chat">
      <div className="chat-bubble">{messages[currentMessage]}</div>
      <img src="/avatar.png" alt="Avatar" className="avatar-image" />
    </div>
  );
}