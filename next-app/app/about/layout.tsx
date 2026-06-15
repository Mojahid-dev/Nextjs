import Navbar from "../components/Navbar";

export default function NavbarLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-2">
      <Navbar />
      {children}
    </div>
    
  );
}