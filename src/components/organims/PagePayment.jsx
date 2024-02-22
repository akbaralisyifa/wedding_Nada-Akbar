import BackgroundImage from "../atoms/BackgroundImage"
import Image from "../atoms/Image"
import Layout from "../atoms/Layout"
import TextBase from "../atoms/TextBase"
import TextName from "../atoms/TextName"
import Button from "../atoms/Button"

const PagePayment = () => {

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        alert("Nomor berhasil disalin ke clipboard!");
      })
      .catch((err) => {
        console.error('Gagal menyalin ke clipboard', err);
      });
  };

  return (
    <>
        <BackgroundImage bg={"bg2.png"} />
        <main id="PagePayment" className="mt-14 -mb-[100px]">
            <Layout>
            <TextBase title={"Kirim hadiah"} style={"text-2xl mt-5 font-semibold"} />
            <p className="mt-5 text-base italic text-center px-5 font-montserrat">Doa dan restu anda merupakan karunia yang sangat berarti bagi kami, namun jika memberi merupakan ungkapan tanda kasih anda. Anda dapat memberi secara cashless.</p>

            <Image image={"bca.png"} style={"w-[130px] mt-5"} />
            <TextName title={ "BCA"} style={"mt-3"} />
            <TextName title={"Nada zahrotul zuhror"} style={"mt-1"} />
            <p className="font-semibold font-alice mt-4 text-2xl">2831828007</p>
            <Button title={"Copy no. rek"} style={"mt-5"} handleClick={() => copyToClipboard("2831828007")} />

            <Image image={"sp.png"} style={"w-[130px] mt-10"} />
            <TextName title={ "shoppepay"} style={"mt-3"} />
            <TextName title={"zuhror"} style={"mt-1"} />
            <p className="font-semibold font-alice mt-4 text-2xl">089668768387</p>
            <Button title={"Copy nomor"} style={"my-5"} handleClick={() => copyToClipboard("089668768387")} />

            </Layout>
        </main>
    </>
  )
}

export default PagePayment