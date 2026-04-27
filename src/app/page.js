import Banner from "@/Component/Homepage/Banner";
import Friends from "@/Component/Homepage/Friends";
import Footer from "@/Component/Shared/Footer";
import Image from "next/image";

export default function Home() {
  return (

    <div className="min-h-screen flex flex-col mt-14">
      <Banner />
      <Friends />
    </div>

  );
}
