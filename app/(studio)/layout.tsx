import AsideStudio from "@/containers/AsideStudio/AsideStudio";
import HeaderStudio from "@/containers/HeaderStudio/HeaderStudio";

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderStudio />
      <main className="flex bg-[#282828]">
        {children}
      </main>
    </>
  );
}
