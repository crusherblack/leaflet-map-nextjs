import dynamic from "next/dynamic";

const ClientMap = dynamic(() => import("./components/map"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

export default function Home() {
  return (
    <main className="container mx-auto">
      <ClientMap />
    </main>
  );
}
