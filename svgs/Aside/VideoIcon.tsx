const VideoIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    style={{
      pointerEvents: "none",
    }}
    {...props}
  >
    <path fill="#fff" d="m10 8 6 4-6 4V8zm11-5v18H3V3h18zm-1 1H4v16h16V4z" />
  </svg>
);
export default VideoIcon;
