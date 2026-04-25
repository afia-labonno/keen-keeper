import Banner from "@/Component/Homepage/Banner";
import Friends from "@/Component/Homepage/Friends";
import Image from "next/image";

export default function Home() {
  return (
      
      <div className="mt-15">
        <Banner />
        <Friends/>
      </div>
    
  );
}
