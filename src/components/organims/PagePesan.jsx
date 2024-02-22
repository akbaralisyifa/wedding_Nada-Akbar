/* eslint-disable no-undef */
import { useContext, useState} from "react";
import BackgroundImage from "../atoms/BackgroundImage";
import Layout from "../atoms/Layout";
import TextBase from "../atoms/TextBase";
import { Toogle } from "../../context/ToogleContext";
import CardPesan from "../molecules/CardPesan";
import axios from "axios";
import Footer from "../atoms/Footer";
import { BG3 } from "../../assets";


const initialValue = {
  name: "",
  pesan: "",
}

const PagePesan = () => {
  const {name : username, datas, setDatas} = useContext(Toogle);
  const [formData, setFormData] = useState(initialValue);
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    e.preventDefault();

    const name = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    const api = import.meta.env.VITE_MOCK_API;

    const newData = {
      name: username || "Hamba Allah",
      pesan: formData.pesan,
    };

    try {
      const response = await axios.post(api, newData);
      const newPost = response.data;
      console.log(newPost);
      setDatas((prevData) => [newPost, ...prevData]);
      setFormData(initialValue);
    } catch (error) {
      console.error("Error submitting data:", error);
      setFormData(initialValue);
    }

    setIsLoading(false);
  }

  return (
    <>
        <BackgroundImage bg={BG3} />
        <main id="PagePesan" className="mt-20 pt-20 pb-24">

        <Layout>
        <TextBase title={"Kirim Ucapan"} style={"text-2xl mt-5 font-semibold"} />
        <form onSubmit={handleSubmit} className="mt-8 flex flex-col">
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Username" 
              required
              className="w-[300px] mt-5 border border-colorNav p-2 rounded-lg outline-1 outline-colorNav" />
            <textarea 
              name="pesan"
              value={formData.pesan}
              onChange={handleChange}
              placeholder="Kirim Ucapan" 
              required 
              className="w-[300px] mt-5 border border-colorNav p-2 rounded-lg outline-1 outline-colorNav h-[150px] overflow-y-hidden"  />
            <button type="submit" className="bg-colorNav  mt-5 py-2 rounded-md text-white drop-shadow-md text-base">{isLoading ? "Loading..." : "Kirim"}</button>
        </form>

        <div className="w-full ml-5 h-[200px] flex justify-center self-center mt-5 overflow-x-hidden overflow-y-scroll py-5 scroll-smooth relative scrollbar-hide">
        <div className="flex flex-col gap-5 mr-5">
          {username !== "Hamba Allah" && 
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