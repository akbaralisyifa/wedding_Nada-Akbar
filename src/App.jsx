
import { useContext, useEffect } from "react";
import Navbar from "./Navbar";
import PageDate from "./components/organims/PageDate";
import PageInvitation from "./components/organims/PageInvitation";
import PageLocation from "./components/organims/PageLocation";
import PageMempelai from "./components/organims/PageMempelai";
import PagePayment from "./components/organims/PagePayment";
import PagePesan from "./components/organims/PagePesan";
import PageSurah from "./components/organims/PageSurah";
import PageMempelaiLaki from "./components/organims/pageMempelaiLaki";
import { Toogle } from "./context/ToogleContext";
import song from '../src/assets/song.mp3'
import PagePaymentSP from "./components/organims/PagePaymentSP";

function App() {
const {isToogle} = useContext(Toogle);

useEffect(() => {
  const audioElement = document.querySelector("#audioPlayer");

  if(audioElement){
    isToogle && audioElement.play()
  }
}, [isToogle]);
  return (
   <>
   <Navbar />
    <PageInvitation />
    <PageDate />
    <PageSurah />
    <PageMempelai />
    <PageMempelaiLaki />
    <PageLocation />
    <PagePayment />
    <PagePaymentSP />
    <PagePesan />

    {/* bottom-28 z-10 */}

    <div className="w-36 bg-slate-600 rounded-lg fixed right-7 top-5 left-7 hidden">
      <audio id="audioPlayer" controls autoPlay>
          <source src={song} type="audio/mp3" />
        </audio>
    </div>
   </>
   
  );
}

export default App;
