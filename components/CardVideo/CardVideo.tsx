import Image from "next/image";
import { CardVideoType } from "./CardVideo.type";

const CardVideo = ({
  video_thumb,
  video_title,
  video_channel_image,
  video_channel_name,
  video_views,
  video_post_time,
  video_time,
  video_id,
}: CardVideoType) => {
  return (
    <div className="flex flex-col text-white">
      <div className="w-full rounded-lg relative">
        <Image
          className="object-cover w-full rounded-lg"
          src={video_thumb}
          width={100}
          height={100}
          alt={video_title}
        />
        <span className="absolute right-2 bottom-1 block bg-black p-1 rounded-[5px] text-[12px]">
          {video_time}
        </span>
      </div>
      <div className="mt-4 flex">
        <Image
          src={video_channel_image}
          width={36}
          height={36}
          alt={video_channel_name}
          className="self-start rounded-full mr-2"
        />
        <div className="max-w-[296px]">
          <h3 className="font-[600]">{video_title}</h3>
          <span className="text-white/50 block text-sm">
            {video_channel_name}
          </span>
          <span className="text-white/50 text-sm">
            {video_views} lượt xem - {video_post_time}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardVideo;
