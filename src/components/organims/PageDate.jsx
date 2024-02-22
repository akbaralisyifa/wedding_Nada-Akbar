
import BackgroundImage from "../atoms/BackgroundImage";
import Button from "../atoms/Button";
import Layout from "../atoms/Layout";
import Text from "../atoms/Text";
import TextBase from "../atoms/TextBase";
import DayMolecules from "../molecules/DayMolecules";

const initialDays = [
  {
    hari: "Rabu",
    tanggal: "28",
  },
  {
    hari: "Kamis",
    tanggal: "29",
  },
  {
    hari: "Jumat",
    tanggal: "01",
  },
  {
    hari: "Sabtu",
    tanggal: "02",
  },
  {
    hari: "Minggu",
    tanggal: "03",
  },
  {
    hari: "Senin",
    tanggal: "04",
  },
  {
    hari: "Selasa",
    tanggal: "05",
  },
];

const PageDate = () => {


  return (
    <>
      <BackgroundImage bg={"bg1.png"} />
    <main id="PageDate" className="">
      <Layout>
        <h1 className="font-playfair uppercase text-primary w-48 mt-20 font-light text-2xl text-center">
          Maret
        </h1>

        <div className="flex text-center gap-4 mt-5 font-playfair text-primary">
          {initialDays.map((day, index) => (
            <DayMolecules day={day} key={index} />
          ))}
        </div>

        <Text
          title={"......................."}
          style={"transform rotate-90 mt-9"}
        />

        <Text
          title={"Save The Date"}
          style={"text-5xl font-great text-primary mt-16"}
        />


        <TextBase title={"For the wedding of"} />

        <p className="font-playfair uppercase text-primary mt-5 font-light text-3xl text-center">
        Nada & Akbar
        </p>
  
        <TextBase title={"Sabtu. 02 maret 2024"} span={<span className="block">10.00 - 14.00</span>} />
        <TextBase title={"Saung bambu"} span={<span className="block">cikeruh</span>} />

        <Button title={"Open Invitation"} handleClick={() => window.open('https://calendar.google.com/calendar/u/0/r/day/2024/3/2') } />
      </Layout>
    </main>
    
    </>
  );
};

export default PageDate;
