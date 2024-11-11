"use client";
import { getLoginGoogleUrl } from "@/apis/auth/auth.api";
import { ButtonType } from "./Button.type";

const typeButtons: { [index: string]: any } = {
  login: {
    className: "py-2 px-6 border border-white/20 rounded-full text-blue-500 font-bold hover:bg-blue-500/20",
    icon: <></>,
    text: "Sign in",
    onClick: getLoginGoogleUrl,
  },
  circle: {
    className: "p-[8px] rounded-full flex items-center justify-center hover:bg-white/20",
    icon: <></>,
    text: "",
    onClick: () => {},
  }
};


const Button = ({ type = "login", iconButton }: ButtonType) => {
  typeButtons[type].icon = iconButton;

  const { className, icon, text, onClick } = typeButtons[type];

  return (
    <button className={className} onClick={onClick}>
      {icon}
      {text}
    </button>
  );
};

export default Button;
