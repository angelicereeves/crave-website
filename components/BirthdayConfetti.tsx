"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";

export default function BirthdayConfetti() {
  useEffect(() => {
    // Only celebrate once per browser session
    const hasCelebrated = sessionStorage.getItem("crave-birthday-confetti");

    if (hasCelebrated) return;

    sessionStorage.setItem("crave-birthday-confetti", "true");

    // Respect accessibility preferences
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const duration = 4000;
    const animationEnd = Date.now() + duration;

    const colors = [
      "#FF69B4", // Pink
      "#FFD700", // Gold
      "#FF6347", // Coral
      "#9370DB", // Purple
      "#00CED1", // Turquoise
      "#FFFFFF", // White
    ];

    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        window.clearInterval(interval);
        return;
      }

      const particleCount = 35 * (timeLeft / duration);

      // Left-side explosion
      confetti({
        particleCount,
        angle: 60,
        spread: 65,
        origin: { x: 0, y: 0.65 },
        colors,
        zIndex: 9999,
        disableForReducedMotion: true,
      });

      // Right-side explosion
      confetti({
        particleCount,
        angle: 120,
        spread: 65,
        origin: { x: 1, y: 0.65 },
        colors,
        zIndex: 9999,
        disableForReducedMotion: true,
      });
    }, 250);

    return () => window.clearInterval(interval);
  }, []);

  return null;
}