import IconDate from "../src/assets/iconDate.png";
import IconSurah from "../src/assets/iconSurah.png";
import IconMempelai from "../src/assets/iconMempelai.png";
import IconLocation from "../src/assets/iconLocation.png";
import IconHadiah from "../src/assets/iconHadiah.png";
import IconPesan from "../src/assets/iconPesan.png";

const DatasNav = [
  {
    path: "#PageDate",
    name: IconDate,
  },
  {
    path: "#PageSurah",
    name: IconSurah,
  },
  {
    path: "#PageMempelai",
    name: IconMempelai,
  },
  {
    path: "#PageLocation",
    name: IconLocation,
  },
  {
    path: "#PagePayment",
    name: IconHadiah,
  },
  {
    path: "#PagePesan",
    name: IconPesan,
  }
];

const Navbar = () => {

  return (
    <nav className="flex justify-center">
      <div className="fixed w-500px bg-colorNav flex gap-3 justify-center items-center bottom-8 px-3 py-2 rounded-lg z-10" >
        {DatasNav.map((item, index) => 
          ( 
            <a href={item.path} key={index} >
                <img className="w-10" src={item.name} alt={item.path} />
              </a>
          )
        )}
      </div>
    </nav>
  );
};

export default Navbar;
