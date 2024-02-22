import { ICONDATE, ICONHADIAH, ICONLOCATION, ICONMEMPELAI, ICONPESAN, ICONSURAH } from "./assets";


const DatasNav = [
  {
    path: "#PageDate",
    name: ICONDATE,
  },
  {
    path: "#PageSurah",
    name: ICONSURAH,
  },
  {
    path: "#PageMempelai",
    name: ICONMEMPELAI,
  },
  {
    path: "#PageLocation",
    name: ICONLOCATION,
  },
  {
    path: "#PagePayment",
    name: ICONHADIAH,
  },
  {
    path: "#PagePesan",
    name: ICONPESAN,
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
