import { Suspense } from "react";

import Nav from "./components/Nav";
import Technologies from "./components/technologies/Technologies";
import type { Itechnology } from "./types/techType";
import Footer from "./assets/Footer";
import Banner from "./components/Banner";

const getTechnologiesFetch = async (): Promise<Itechnology[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();

  return data;
};

function App() {
  const technologiesPromise = getTechnologiesFetch();

  return (
    <>
      <Nav />
      <Banner></Banner>
      <Suspense fallback={<h2>Loading</h2>}>
        <Technologies technologiesPromise={technologiesPromise} />
      </Suspense>
     <Footer></Footer>
      
    </>
  );
}

export default App;