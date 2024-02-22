import BackgroundImage from "../atoms/BackgroundImage"
import Layout from "../atoms/Layout"
import Image from '../atoms/Image'
import TextName from "../atoms/TextName"
import { AKBAR, BG2 } from "../../assets"

const PageMempelaiLaki = () => {
  return (
    <>
    <BackgroundImage bg={BG2} />
    <main className="mt-20 mb-20">
        <Layout>
            <Image image={AKBAR} style={"w-[250px]"} />

            <TextName title={"Muhammad Akbar Ali Syifa"} />
            <p className="text-center font-playfair text-lg mt-5">Anak Pertama : <span className="block">Bapak Aktopian</span><span className="block">&</span><span>Ibu Umi Khasanah</span></p>
        </Layout>
    </main>
    </>
  )
}

export default PageMempelaiLaki;