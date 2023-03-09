import "./App.css"
import Navbar from './Components/Navbar';
import { useEffect, useState } from 'react';
import SearchBar from './Components/Searchbar';
import Footer from './Components/Footer';
import axios from "axios";
import ModalWindow from "./Components/ModalWindow";


function App() {

  const [coinNumber, setCoinNumber] = useState({
    value: 10,
  })

  const [apiUrl, setApiUrl] = useState(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=${coinNumber.value}&page=1&sparkline=false`) // default view is top ten crypto currencies 

  const [isLoading, setIsLoading] = useState(false)

  const [modalState, setModalState] = useState(false)

  const [modalData, setModalData] = useState(null)

  const [cryptoCoins, setCryptoCoins] = useState([])

  const closeWindow = () => {
    setModalState(false)
  }


  const fetchData = async () => {
    const response = await axios.get(apiUrl)
    setCryptoCoins(response.data)

  }
  useEffect(() => { fetchData() }, [apiUrl])
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      const url = apiUrl;
      const result = await fetch(url);
      const data = await result.json();

      setCoinNumber(coinNumber);

      setIsLoading(false);
    };
    if (apiUrl == ! null) {
      loadData()
    }
  }, [apiUrl]);


  return (
    <div className="App">
      <Navbar />
      <SearchBar coinNumber={coinNumber} setCoinNumber={setCoinNumber} setApiUrl={setApiUrl} />
      <div className="coinInfo_wrapper">
        <div className="coinInfo">
          {cryptoCoins?.map((cryptoCoin) => {
            return <div className="coinDetails" key={cryptoCoin.id}>
              <img className="coinImage" src={cryptoCoin.image} alt="the cryptocoins logo" />
              <div className="coinText">
                {cryptoCoin.name} ${cryptoCoin.current_price}
              </div>
              <button className="modalButton" onClick={() => { setModalData(cryptoCoin); setModalState(true) }}>More Info</button>
              {modalState == true ? (
                <ModalWindow modalState={modalState} setModalState={setModalState} modalData={modalData} setModalData={setModalData} />
              ) :
                (null)}
            </div>
          })}
        </div>
      </div>
      <Footer />
    </div >
  );
}

export default App;
