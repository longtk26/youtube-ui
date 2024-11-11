const NotifyIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    aria-hidden="true"
    style={{
      pointerEvents: "none",
      display: "inherit",
      width: "100%",
      height: "100%",
    }}
    {...props}
  >
    <path
      fillRule="evenodd"
      d="m13.497 4.898.053.8.694.4A4.498 4.498 0 0 1 16.5 10v2.892c0 .997.27 1.975.784 2.83L18.35 17.5H5.649l1.067-1.778a5.5 5.5 0 0 0 .784-2.83V10c0-1.666.904-3.122 2.256-3.902l.694-.4.053-.8a1.5 1.5 0 0 1 2.994 0ZM6 10a5.997 5.997 0 0 1 3.007-5.201 3 3 0 0 1 5.986 0A5.997 5.997 0 0 1 18 10v2.892a4 4 0 0 0 .57 2.058l1.521 2.535A1 1 0 0 1 19.234 19H15c0 .796-.316 1.559-.879 2.121a2.996 2.996 0 0 1-4.242 0A2.995 2.995 0 0 1 9 19H4.766a1 1 0 0 1-.857-1.515L5.43 14.95A4 4 0 0 0 6 12.892V10Zm4.5 9c0 .398.158.78.44 1.06a1.494 1.494 0 0 0 2.12 0c.282-.28.44-.662.44-1.06h-3Z"
      clipRule="evenodd"
    />
  </svg>
);
export default NotifyIcon;
