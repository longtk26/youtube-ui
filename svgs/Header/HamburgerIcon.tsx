const HamburgerIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    style={{
      pointerEvents: "none",
    }}
    {...props}
  >
    <path fill="#fff" d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z" />
  </svg>
);
export default HamburgerIcon;
