import Navbar from "@/components/web/Navbar";

export default function SharedLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-2">
      <Navbar />
      {children}
    </div>
  );
}