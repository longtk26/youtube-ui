import { getUserInfo } from "@/apis/auth/auth.api";
import Button from "@/components/Button/Button";
import Search from "@/components/Search/Search";
import CreateIcon from "@/svgs/Header/CreateIcon";
import HamburgerIcon from "@/svgs/Header/HamburgerIcon";
import NotifyIcon from "@/svgs/Header/NotifyIcon";
import YoutubeLogo from "@/svgs/Header/YoutubeLogo";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";

const Header = async () => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("access_token")?.value ?? "";
  const {isLogin, userInfo} = await getUserInfo(accessToken);
  const typeButton = isLogin ? "circle" : "login";

  return (
    <header className="flex w-[100%] h-[56px] text-white">
      <nav className="max-w-[1400px] mx-auto grow flex items-center justify-between pl-2 pr-10">
        <div className="flex items-center">
          <div className="hover:bg-white/30 w-[36px] h-[36px] rounded-[50%] flex mr-6 hover:cursor-pointer">
            <HamburgerIcon className="m-auto" />
          </div>
          <Link href={"/"}>
            <YoutubeLogo />
          </Link>
        </div>
        <Search />
        {isLogin ? (
          <div className="flex">
            <Button type={typeButton} iconButton={<CreateIcon />} />
            <Button type={typeButton} iconButton={<NotifyIcon />} />
            <Button type={typeButton} 
                    iconButton={
                    <Image src={userInfo?.image ?? ""} alt="user_image" width={30} height={30} />
                    } 
            />
          </div>
        ) : (
          <>
            <Button type={typeButton} />
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
