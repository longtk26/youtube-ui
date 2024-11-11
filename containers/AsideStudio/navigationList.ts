import HomeIcon from "@/svgs/Aside/HomeIcon";
import PersonIcon from "@/svgs/Aside/PersonIcon";
import RegisterChannelIcon from "@/svgs/Aside/RegisterChannelIcon";
import VideoIcon from "@/svgs/Aside/VideoIcon";

export const navigationList: {
  [index: string]: { name: string; path: string; icon: any }[];
} = {
  default: [
    {
      name: "Tổng quan",
      icon: HomeIcon,
      path: "/",
    },
    {
      name: "Nội dung",
      icon: RegisterChannelIcon,
      path: "/feed/subscriptions",
    },
    {
      name: "Nội dung",
      icon: RegisterChannelIcon,
      path: "/feed/subscriptions",
    },
    {
      name: "Nội dung",
      icon: RegisterChannelIcon,
      path: "/feed/subscriptions",
    },
    {
      name: "Nội dung",
      icon: RegisterChannelIcon,
      path: "/feed/subscriptions",
    },
    {
      name: "Nội dung",
      icon: RegisterChannelIcon,
      path: "/feed/subscriptions",
    },
    {
      name: "Nội dung",
      icon: RegisterChannelIcon,
      path: "/feed/subscriptions",
    },
  ],
  you: [
    {
      name: "Kênh của bạn",
      icon: PersonIcon,
      path: "/channel",
    },
    {
      name: "Video của bạn",
      icon: VideoIcon,
      path: "/studio/channel",
    },
  ],
};
