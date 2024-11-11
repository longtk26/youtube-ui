import CardVideo from "@/components/CardVideo/CardVideo";
import { listVideos } from "@/mocks/listVideo";
import Link from "next/link";

const ListVideos = () => {
  return (
    <section className="w-full mt-4">
      <ul className="flex flex-wrap gap-4">
        {listVideos.map((video) => (
          <li key={video.video_id} className="w-[31.333%]">
            <Link href={"#"}>
              <CardVideo {...video} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ListVideos;
