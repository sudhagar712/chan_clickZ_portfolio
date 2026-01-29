import { useEffect, useRef } from "react";
import heroVideo from "../assets/Animated_Effect_Video_Generated (1).mp4";

const Loading = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video
        .play()
        .catch((err) => console.log("Video autoplay prevented:", err));
    }
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="
          absolute 
          top-1/2 left-1/2 
          w-full h-full 
          -translate-x-1/2 -translate-y-1/2 
          object-fit 
          md:object-cover
        "
        autoPlay
        loop
        playsInline
        preload="auto"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>
    </div>
  );
};

export default Loading;
