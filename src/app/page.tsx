import DemoOne from "@/components/demo";
import Sections from "@/components/sections";
import { PrintOnDemandNavbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <PrintOnDemandNavbar />
      <DemoOne />
      <Sections />
      <Footer />
    </>
  );
}
