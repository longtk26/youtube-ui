import Aside from "@/containers/Aside/Aside";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Aside />
      {children}
    </main>
  );
}
