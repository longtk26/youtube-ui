const CreateIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    aria-hidden="true"
    style={{
      pointerEvents: "none",
      display: "inherit",
      width: "100%",
      height: "100%",
      fill: "#fff"
    }}
    {...props}
  >
    <path d="M14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2zm3-7H3v12h14v-6.39l4 1.83V8.56l-4 1.83V6m1-1v3.83L22 7v8l-4-1.83V19H2V5h16z" />
  </svg>
);
export default CreateIcon;