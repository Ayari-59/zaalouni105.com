"use client";

import { useRef, useState } from "react";

export default function AmbientSound() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      void audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/za3lagool.m4a"
        loop
        preload="none"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      <button
        type="button"
        onClick={toggle}
        aria-pressed={playing}
        aria-label={
          playing
            ? "Couper la musique d'ambiance"
            : "Lancer la musique d'ambiance — Pump it up, Za3lagoool"
        }
        title={playing ? "Couper la musique" : "Pump it up, Za3lagoool 🎵"}
        className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-white/20 text-xl shadow-lg transition-all ${
          playing
            ? "animate-glow bg-ca shadow-[0_0_25px_6px_rgba(225,29,46,0.55)]"
            : "bg-coal hover:bg-ca"
        }`}
      >
        {playing ? "🔊" : "🎵"}
      </button>
    </>
  );
}
