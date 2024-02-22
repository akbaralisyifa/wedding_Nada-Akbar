import BackgroundImage from "../atoms/BackgroundImage"
import Layout from "../atoms/Layout"
import Image from '../atoms/Image'
import TextName from "../atoms/TextName"

const PageMempelaiLaki = () => {
  return (
    <>
    <BackgroundImage bg={"bg2.png"} />
    <main className="mt-20 mb-20">
        <Layout>
            <Image image={"akbar.png"} style={"w-[250px]"} />

            <TextName title={"Muhammad Akbar Ali Syifa"} />
            <p className="text-center font-playfair text-lg mt-5">Anak Pertama : <span className="block">Bapak Aktopian</span><span className="block">&</span><span>Ibu Umi Khasanah</span></p>
        </Layout>
    </main>
    </>
  )
}

export default PageMempelaiLaki;