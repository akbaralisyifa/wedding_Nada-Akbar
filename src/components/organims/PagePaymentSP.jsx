import { useContext } from "react"
import { BG3, SHOPEE } from "../../assets"
import { Toogle } from "../../context/ToogleContext"
import BackgroundImage from "../atoms/BackgroundImage"
import Button from "../atoms/Button"
import Image from "../atoms/Image"
import Layout from "../atoms/Layout"
import TextName from "../atoms/TextName"

const PagePaymentSP = () => {
    const {copyToClipboard} = useContext(Toogle)
  return (
    <>
        <BackgroundImage bg={BG3} />
        <main className="mb-40">
            <Layout>
            <Image image={SHOPEE} style={"w-[130px] mt-10"} />
            <TextName title={ "shoppepay"} style={"mt-3"} />
            <TextName title={"zuhror"} style={"mt-1"} />
            <p className="font-semibold font-alice mt-4 text-2xl">089668768387</p>
            <Button title={"Copy nomor"} style={"my-5"} handleClick={() => copyToClipboard("089668768387")} />
            </Layout>
        </main>
    </>
  )
}

export default PagePaymentSP