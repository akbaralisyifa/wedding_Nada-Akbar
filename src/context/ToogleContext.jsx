import  { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

// Membuat context baru
const ToogleContext = createContext();

const ToogleContextProvider = ({ children }) => {
  // Menggunakan objek sebagai nilai awal state
  const [isToogle, setIsToogle] = useState(false);
  const username = window.location.search;
  const name = decodeURIComponent(username.replace("?to=", ""));

  const [datas, setDatas] = useState([])

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    // eslint-disable-next-line no-undef
    const Api = import.meta.env.VITE_MOCK_API;

    try {
      const response = await axios.get(Api);
      const resJson = response.data;
      setDatas(resJson);
    } catch (error) {
      console.log(error);
    }
  }


  // Bagian Copy Nomor
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
    // Memberikan nilai state dan fungsi untuk memperbarui state sebagai nilai context
    <ToogleContext.Provider value={{ isToogle, setIsToogle, name, datas, setDatas, copyToClipboard}}>
      {children}
    </ToogleContext.Provider>
  );
};

ToogleContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Ekspor context dan provider
export const Toogle = ToogleContext;
export default ToogleContextProvider;
