import FetchDataFromFirestore from "@/components/FetchDataFromFirestore";
import Navbar from "@/components/Navbar";

export default function Home() {

  return (
    <main className="flex flex-col items-center p-5 gap-3">
     
      <Navbar />
      <FetchDataFromFirestore />
    </main>
  );
}
 