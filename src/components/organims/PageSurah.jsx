import BackgroundImage from "../atoms/BackgroundImage"
import Button from "../atoms/Button"
import Layout from "../atoms/Layout"
import Image from "../atoms/Image"
import { BG2, BISMILLAH, SURAH } from "../../assets"

const PageSurah = () => {
  return (
    <>
        <BackgroundImage bg={BG2} />
        <main id="PageSurah" className="pt-20 mb-20">
        <Layout>
            <Image image={BISMILLAH}/>

            <p className="my-5">---------------------------</p>

            <Image image={SURAH}/>
            <p className="my-5">---------------------------</p>

            <blockquote className="px-4 text-sm font-medium italic text-center font-montserrat"> Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.</blockquote>

            <Button title={"Qs. Ar-rum : 21"} handleClick={() => {""}} />
        </Layout>
        </main>
    </>
  )
}

export default PageSurah