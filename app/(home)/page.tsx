import { getUserInfo } from "@/apis/auth/auth.api";
import ListVideos from "@/containers/ListVideos/ListVideos";
import { cookies } from "next/headers";

export default async function Home() {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("access_token")?.value ?? "";
  const userInfo = await getUserInfo(accessToken);

  return (
    <>
      <ListVideos />
    </>
  );
}
