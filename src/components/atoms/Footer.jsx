import { BG2 } from "../../assets"
import BackgroundImage from "./BackgroundImage"

const Footer = () => {
  return (
    <>
    <BackgroundImage bg={BG2} />
    <footer className=" mt-5 font-great text-lg flex flex-col justify-center items-center pb-24">
        <p>&copy; Happy Wedding 2024 - Nada & Akbar</p>
            <p>~~~~~ ❤ ~~~~~</p>
    </footer>
    </>
  )
}

export default Footer