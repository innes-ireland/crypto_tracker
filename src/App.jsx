
import DisplayData from './Components/DisplayData';
import Navbar from './Components/Navbar';
import { useEffect, useState } from 'react';
import SearchBar from './Components/Searchbar';
import Footer from './Components/Footer';

function App() {

  const [coinNumber, setCoinNumber] = useState({
    value: 10,
  })

  const [apiUrl, setApiUrl] = useState(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=10&page=1&sparkline=false`)


  return (
    <div className="App">
      <Navbar />
      <SearchBar setCoinNumber={setCoinNumber} setApiUrl={setApiUrl} />
      <DisplayData apiUrl={apiUrl} setApiUrl={setApiUrl} />
      <Footer />
    </div>
  );
}

export default App;
