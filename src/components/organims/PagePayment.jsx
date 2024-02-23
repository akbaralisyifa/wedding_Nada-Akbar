import BackgroundImage from "../atoms/BackgroundImage"
import Image from "../atoms/Image"
import Layout from "../atoms/Layout"
import TextBase from "../atoms/TextBase"
import TextName from "../atoms/TextName"
import Button from "../atoms/Button"
import { BCA, BG2 } from "../../assets"
import { useContext } from "react"
import { Toogle } from "../../context/ToogleContext"

const PagePayment = () => {
  const {copyToClipboard} = useContext(Toogle)

  return (
    <>
        <BackgroundImage bg={BG2} />
        <main id="PagePayment" className="mt-14">
            <Layout>
            <TextBase title={"Kirim hadiah"} style={"text-2xl mt-5 font-semibold"} />
            <p className="mt-5 text-base italic text-center px-5 font-montserrat">Doa dan restu anda merupakan karunia yang sangat berarti bagi kami, namun jika memberi merupakan ungkapan tanda kasih anda. Anda dapat memberi secara cashless.</p>

            <Image image={BCA} style={"w-[130px] mt-5"} />
            <TextName title={ "BCA"} style={"mt-3"} />
            <TextName title={"Nada zahrotul zuhror"} style={"mt-1"} />
            <p className="font-semibold font-alice mt-4 text-2xl">2831828007</p>
            <Button title={"Copy no. rek"} style={"mt-5"} handleClick={() => copyToClipboard("2831828007")} />

            </Layout>
        </main>
    </>
  )
}

export default PagePayment