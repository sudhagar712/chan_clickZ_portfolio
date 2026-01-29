import { useEffect, useRef, useState } from "react";
import heroVideo from "../assets/Animated_Effect_Video_Generated (1).mp4";

const Loading = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true; // autoplay-ku required
      video.play().catch((err) => console.log("Autoplay prevented:", err));
    }
  }, []);

  const handleUnmute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = false;
      video.volume = 1;
      setIsMuted(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
      onClick={handleUnmute} // user tap -> sound on
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        className="
          absolute 
          top-1/2 left-1/2 
          w-full h-full 
          -translate-x-1/2 -translate-y-1/2 
          object-contain 
          md:object-cover
        "
        autoPlay
        muted={isMuted}
        loop
        playsInline
        preload="auto"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Tap to unmute text */}
      {isMuted && (
        <p className="absolute bottom-10 cursor-pointer text-white text-sm animate-pulse">
          🔊
        </p>
      )}
    </div>
  );
};

export default Loading;
