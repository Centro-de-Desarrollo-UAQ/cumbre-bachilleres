interface VideoSectionProps {
  src: string;
  title?: string;
  poster?: string;
  aspectRatio?: "16/9" | "4/3" | "auto";
  objectFit?: "contain" | "cover";
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
}

const VideoSection = ({
  src,
  title = "Video",
  poster,
  aspectRatio = "16/9",
  objectFit = "cover",
  autoPlay = true,
  muted = true,
  loop = false,
}: VideoSectionProps) => {
  return (
    <div className="w-full  px-12 py-8 mt-6">
      <div className="w-full mx-auto ">
        <video
          controls
          preload="metadata"
          className="w-full h-160 rounded-lg"
          style={{
            aspectRatio: aspectRatio,
            objectFit: objectFit,
          }}
          poster={poster}
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          playsInline
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p className="sr-only">{title}</p>
      </div>
    </div>
  );
};

export default VideoSection;
