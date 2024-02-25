/* eslint-disable no-undef */
import { useContext, useState} from "react";
import BackgroundImage from "../atoms/BackgroundImage";
import Layout from "../atoms/Layout";
import TextBase from "../atoms/TextBase";
import { Toogle } from "../../context/ToogleContext";
import CardPesan from "../molecules/CardPesan";
import Footer from "../atoms/Footer";
import { BG2 } from "../../assets";
import { useForm } from "react-hook-form";
import axios from "axios";

const PagePesan = () => {
  const {name : username, datas, setDatas} = useContext(Toogle);
  const [isLoading, setIsLoading] = useState(false);

  console.log(username);

  const {register, handleSubmit, reset} = useForm({
    defaultValues: {
      name: "",
      pesan: "",
    },
    mode : "onSubmit"
  });

  const onSubmit = async (val, e) => {
    e.preventDefault();
    const api = import.meta.env.VITE_MOCK_API;
    const newDate = {
      name : username === "" ? "Hamba Allah" : username.toLowerCase(),
      pesan : username === "" ? "pesan error" : val.pesan
    }
    try {
      setIsLoading(true);
      const res = await axios.post(api, newDate);
      const prevDate = res.data;
      setDatas((prev) => [prevDate, ...prev])
      reset();
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false)
    }
  }

  return (
    <>
        <BackgroundImage bg={BG2} />
        <main id="PagePesan" className="mt-20">

        <Layout>
        <TextBase title={"Kirim Ucapan"} style={"text-2xl mt-5 font-semibold"} />
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 flex flex-col">
            <input 
              type="text" 
              {...register("name", {required: true})}
              placeholder="Username" 
              className="w-[300px] mt-5 border border-colorNav p-2 rounded-lg outline-1 outline-colorNav" />
            <textarea 
              {...register("pesan", {required: true})}
              placeholder="Kirim Ucapan"
              className="w-[300px] mt-5 border border-colorNav p-2 rounded-lg outline-1 outline-colorNav h-[150px] overflow-y-hidden"  />
            <button type="submit" className="bg-colorNav  mt-5 py-2 rounded-md text-white drop-shadow-md text-base">{isLoading ? "Loading..." : "Kirim"}</button>
        </form>

        <div className="w-full ml-5 h-[200px] flex justify-center self-center mt-5 overflow-x-hidden overflow-y-scroll py-5 scroll-smooth relative scrollbar-hide">
        <div className="flex flex-col gap-5 mr-5">
          {
            datas.map((data) => (
              <CardPesan key={data.id} data={data} />
            ))
          }
        </div>
        </div>

        <Footer />
        </Layout>
        </main>
    </>
  )
}

export default PagePesan