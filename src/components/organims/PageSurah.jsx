import BackgroundImage from "../atoms/BackgroundImage"
import Button from "../atoms/Button"
import Layout from "../atoms/Layout"
import Image from "../atoms/Image"

const PageSurah = () => {
  return (
    <>
        <BackgroundImage bg={"bg2.png"} />
        <main id="PageSurah" className="pt-20 mb-20">
        <Layout>
            <Image image="bismillah.png"/>

            <p className="my-5">---------------------------</p>

            <Image image="surah.png"/>
            <p className="my-5">---------------------------</p>

            <blockquote className="px-4 text-sm font-medium italic text-center font-montserrat"> Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.</blockquote>

            <Button title={"Qs. Ar-rum : 21"} handleClick={() => {""}} />
        </Layout>
        </main>
    </>
  )
}

export default PageSurah