import Aside from "@/containers/Aside/Aside";
import Header from "@/containers/Header/Header";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <Header />
    <main className="flex">
      <Aside />
      {children}
    </main>
    </>
  );
}
