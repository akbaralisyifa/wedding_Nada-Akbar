import BackgroundImage from "../atoms/BackgroundImage"
import Layout from "../atoms/Layout"
import Image from '../atoms/Image'
import TextName from "../atoms/TextName"
import { BG3, BISMILAHSMALL, NADA } from "../../assets"

const PageMempelai = () => {
  return (
    <>
    <BackgroundImage bg={BG3} />
    <main id="PageMempelai" className="">
        <Layout>
            <Image image={BISMILAHSMALL} style={"w-[300px] pt-10"} />
            <p className="mt-10 text-center px-5 font-montserrat">Dengan memohon rahmat dan ridho allah Subhanahu Wa Ta’ala, insyaallah kami akan menyelenggarakan acara pernikahan anak kami :</p>

            <Image image={NADA} style={"w-[250px]"} />

            <TextName title={"Nada zahrotul zuhror"} />
            <p className="text-center font-playfair text-lg mt-5">Anak ke empat dari : <span className="block">Bapak Imat Ruhimat</span><span className="block">&</span><span>Ibu Enok Tarmilah</span></p>
        </Layout>
    </main>
    </>
  )
}

export default PageMempelai