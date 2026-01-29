import heroVideo from "../assets/Landscape_Video_Generation.mp4";

const Loading = () => {
  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-end justify-center overflow-hidden pb-8 sm:pb-12 md:pb-16"
    >
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Overlay for better visibility */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Loading Effect at Bottom */}
      <div className="relative z-10 flex items-center gap-2">
        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '0.6s' }}></div>
        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s', animationDuration: '0.6s' }}></div>
        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s', animationDuration: '0.6s' }}></div>
      </div>
    </div>
  );
};

export default Loading;

