import { BG3, HOUSE } from "../../assets"
import BackgroundImage from "../atoms/BackgroundImage"
import Button from "../atoms/Button"
import Image from "../atoms/Image"
import Layout from "../atoms/Layout"
import GrupTextLocation from "../molecules/GrupTextLocation"
const PageLocation = () => {
  return (
    <>
    <BackgroundImage bg={BG3} />
    <main id="PageLocation" className="-mb-12">
        <Layout>
            <Image image={HOUSE}/>
            <p className="mt-5 text-center px-5 font-montserrat">
            Dengan segala kerendahan hati kami berharap kehadiran bapak/ibu/saudara/i pada pernikahan anak kami yang akan kami diselenggarakan pada :
            </p>
            <p className="text-6xl font-great text-primary mt-5 text-center"> Akad <span className="block">&</span> Resepsi</p>

            <GrupTextLocation />

            <Button title="Open Location" handleClick={() => window.open("https://www.google.com/maps/place/Saung+Bambu+Cikeruh/@-6.9423681,107.7780942,17z/data=!3m1!4b1!4m6!3m5!1s0x2e68c496012ccc15:0xfd7385181ad677a0!8m2!3d-6.9423734!4d107.7806691!16s%2Fg%2F11ggsfrxgz?entry=ttu")} />
        </Layout>
    </main>
    </>
  )
}

export default PageLocation