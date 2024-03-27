import FetchDataFromFirestore from "@/components/FetchDataFromFirestore";
import AddDataToFirestore from "@/components/addDataToFirestore";

export default function Home() {

  return (
    <main className="flex flex-col items-center p-5 gap-3">
      <AddDataToFirestore />

      <FetchDataFromFirestore />
    </main>
  );
}
 