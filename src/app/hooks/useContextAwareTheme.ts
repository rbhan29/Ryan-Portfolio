import { useEffect, useState } from "react";

export default function useContextAwareTheme() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const hour = new Date().getHours();
    setTheme(hour >= 18 || hour < 6 ? "dark" : "light");
  }, []);

  return theme;
}