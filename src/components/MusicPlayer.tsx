import { useState, useRef } from "react";
import { Music, Volume2, VolumeX } from "lucide-react";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Link musik instrumental (Placeholder)

  const musicUrl = "/music/3.03pm.mp3";

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((err) => {
          console.error("Autoplay blocked or error:", err);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-center group">
      {/* Tooltip */}
      <div className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-slate-800/90 border border-slate-700/50 text-slate-200 text-sm font-medium rounded-xl shadow-xl opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-300 w-max backdrop-blur-md">
        {isPlaying ? "Pause Music" : "Play Music"} 🎵
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-x-8 border-x-transparent border-t-8 border-t-slate-800/90"></div>
      </div>

      <div className="relative flex items-center">
        {/* Decorative Ring (Spinning when playing) */}
        <div
          className={`absolute inset-0 rounded-full border-2 border-dashed border-indigo-500/30 transition-all duration-700 ${
            isPlaying
              ? "animate-spin-slow scale-125 opacity-100"
              : "scale-100 opacity-0"
          }`}
        />

        {/* Main Button */}
        <button
          onClick={togglePlay}
          className={`relative w-12 h-12 flex items-center justify-center rounded-full transition-all duration-500 shadow-xl backdrop-blur-xl border-2 z-10 ${
            isPlaying
              ? "bg-indigo-600/20 border-indigo-400/50 shadow-indigo-500/30"
              : "bg-slate-900/80 border-slate-700/50 hover:border-indigo-500/50 hover:bg-slate-800/90 shadow-black/60"
          }`}
        >
          {/* Inner Glow */}
          {isPlaying && (
            <div className="absolute inset-0 rounded-full bg-indigo-500/10 animate-pulse" />
          )}

          {isPlaying ? (
            <div className="flex items-end gap-0.5 h-4 mb-0.5">
              <span className="w-0.5 bg-indigo-400 animate-music-bar-1 rounded-full shadow-[0_0_8px_rgba(129,140,248,0.6)]"></span>
              <span className="w-0.5 bg-indigo-400 animate-music-bar-2 rounded-full shadow-[0_0_8px_rgba(129,140,248,0.6)]"></span>
              <span className="w-0.5 bg-indigo-400 animate-music-bar-3 rounded-full shadow-[0_0_8px_rgba(129,140,248,0.6)]"></span>
              <span className="w-0.5 bg-indigo-400 animate-music-bar-4 rounded-full shadow-[0_0_8px_rgba(129,140,248,0.6)]"></span>
            </div>
          ) : (
            <Music className="w-5 h-5 text-slate-400 group-hover:text-indigo-400 group-hover:scale-110 transition-all duration-300" />
          )}

          {/* Active indicator dot */}
          {isPlaying && (
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500 border border-slate-950"></span>
            </span>
          )}
        </button>

        {/* Mute Toggle (Small button above) */}
        {isPlaying && (
          <button
            onClick={toggleMute}
            className="absolute -bottom-1 -right-2 w-7 h-7 bg-slate-800/90 border border-slate-700 rounded-full flex items-center justify-center shadow-lg hover:bg-slate-700 hover:scale-110 transition-all z-20 backdrop-blur-sm"
          >
            {isMuted ? (
              <VolumeX className="w-3.5 h-3.5 text-rose-500" />
            ) : (
              <Volume2 className="w-3.5 h-3.5 text-indigo-400" />
            )}
          </button>
        )}
      </div>

      <audio
        ref={audioRef}
        src={musicUrl}
        loop
        onEnded={() => setIsPlaying(false)}
      />
    </div>
  );
};

export default MusicPlayer;
