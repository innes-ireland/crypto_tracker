import { useState } from "react"
export default function SearchBar({ coinNumber, setCoinNumber, setApiUrl }) {



    const handleCoinNumber = (e) => {
        setCoinNumber({ ...coinNumber, value: e.target.value })
        console.log(coinNumber)
    }

    const handleSearch = () => {
        setApiUrl(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=${coinNumber.value}&page=1&sparkline=false`)
    }


    return (
        <div className="searchBar">
            <h3> show top
                <select onChange={handleCoinNumber} value={coinNumber.value}>
                    <option value="10"> 10</option>
                    <option value="25"> 25</option>
                    <option value="50"> 50</option>
                    <option value="100"> 100</option>
                </select>
                cryptocurrencies
                <button className="searchButton" onClick={handleSearch}> search</button></h3>
        </div>
    )
}