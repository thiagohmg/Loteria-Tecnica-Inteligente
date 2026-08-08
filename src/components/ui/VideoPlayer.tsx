import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";
import { cn } from "@/lib/utils";

interface VideoPlayerProps {
  label?: string;
  badge?: string;
  note?: string;
  aspect?: "16:9" | "9:16" | "4:3";
  className?: string;
  youtubeId?: string;
}

export function VideoPlayer({
  label = "Vídeo",
  badge,
  note,
  aspect = "16:9",
  className,
  youtubeId,
}: VideoPlayerProps) {
  const [playing, setPlaying] = useState(false);

  const aspectClass = {
    "16:9": "aspect-video",
    "9:16": "aspect-[9/16] max-w-sm mx-auto",
    "4:3": "aspect-[4/3]",
  }[aspect];

  return (
    <div className={cn("w-full", className)}>
      <div
        className={cn(
          "relative rounded-[20px] overflow-hidden shadow-gold-glow-lg border border-gold-500/25 group",
          aspectClass,
        )}
      >
        {youtubeId && playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`}
            title={label}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        ) : (
          <>
            {youtubeId ? (
              <img
                src={`https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`}
                alt={label}
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950">
                <div className="absolute inset-0 grid-pattern opacity-60" />
                <div className="absolute -top-20 -right-20 w-[360px] h-[360px] rounded-full blob bg-gold-500/40" />
                <div className="absolute -bottom-24 -left-20 w-[420px] h-[420px] rounded-full blob bg-navy-600/50" />
              </div>
            )}

            {youtubeId && (
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/20 to-transparent" />
            )}

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-gradient text-navy-950 font-bold text-xs sm:text-sm uppercase tracking-widest mb-5 shadow-gold-glow">
                <span className="w-1.5 h-1.5 rounded-full bg-navy-950 animate-pulse" />
                {badge ?? "Vídeo"}
              </div>
              <h3 className="font-display text-2xl sm:text-4xl font-bold text-white mb-3 drop-shadow-lg">
                {label}
              </h3>
              <p className="text-white/80 text-sm sm:text-base max-w-lg drop-shadow">
                Clique no botão play para assistir.
              </p>
            </div>
          </>
        )}

        {!playing && (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="absolute inset-0 cursor-pointer focus:outline-none"
            aria-label="Reproduzir vídeo"
          >
            <span className="sr-only">Play</span>

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.96 }}
                className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center transition-all bg-gold-gradient shadow-gold-glow-lg"
              >
                <div className="absolute inset-0 rounded-full animate-ping-slow bg-gold-500/30" />
                <div className="absolute inset-0 rounded-full border-2 border-white/40" />
                <Play className="relative w-10 h-10 sm:w-11 sm:h-11 text-navy-950 ml-1.5" fill="#050E1F" strokeWidth={0} />
              </motion.div>
            </div>
          </button>
        )}

        {playing && !youtubeId && (
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-end px-5 pb-4 gap-3">
            <button className="text-white/90" aria-label="Play/Pause">
              <Pause className="w-5 h-5" />
            </button>
            <div className="flex-1 h-1.5 rounded-full bg-white/20 overflow-hidden">
              <div className="h-full w-1/4 bg-gold-gradient rounded-full shadow-gold-glow" />
            </div>
            <span className="text-white/80 text-xs font-medium">00:00 / --:--</span>
          </div>
        )}
      </div>

      {note ? (
        <p className="mt-4 text-center text-white/50 text-xs sm:text-sm italic">
          {note}
        </p>
      ) : null}
    </div>
  );
}
