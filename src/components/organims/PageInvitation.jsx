import  { useContext } from 'react';
import BackgroundImage from "../atoms/BackgroundImage";
import TextMolecules from "../molecules/TextMolecules";
import Layout from "../atoms/Layout";
import  {Toogle} from "../../context/ToogleContext";
import Button from '../atoms/Button';

const PageInvitation = () => {
  const {isToogle, setIsToogle} = useContext(Toogle);
  const {name} = useContext(Toogle);

  return (
    <div className={`fixed w-full h-screen z-20 ${isToogle && "-translate-y-[1000px] transition duration-1000 ease-in-out"}`}>
      <BackgroundImage bg={"bg.png"} />
      <Layout>
        <h1 className="uppercase text-primary w-48 mt-16 font-light text-xl text-center font-alice ">
          you are invIte to the wedding of
        </h1>
        <TextMolecules />

        <p className="text-primary font-montserrat uppercase">
          Kepada yth
        </p>

        <p className="border-y border-primary border-opacity-30 w-48 text-center py-2 mt-5 font-semibold">
          {name || "hamba Allah"}
        </p>

        <Button title={"Open Invitation"} handleClick={() => setIsToogle(true)} />
      </Layout>
    </div>
  );
};

export default PageInvitation;
