import { useEffect, useState } from "react"
import axios from "axios"
import React from "react"
import CoinModal from "./CoinModal"

export default function DisplayData({ apiUrl, }) {


    const [cryptoCoins, setCryptoCoins] = useState([])

    const [modalState, setModalState] = useState(false)




    const fetchData = async () => {
        const response = await axios.get(apiUrl)
        setCryptoCoins(response.data)

    }
    useEffect(() => { fetchData() }, [apiUrl])

    return (
        <div className="coinInfo_wrapper">
            <div className="coinInfo">
                {cryptoCoins?.map((cryptoCoin) => {
                    console.log(cryptoCoin)
                    return <div className="coinDetails">
                        <img className="coinImage" src={cryptoCoin.image} alt="the cryptocoins logo" />
                        {cryptoCoin.name} ${cryptoCoin.current_price}
                        <button className="modalButton" onClick={() => { setModalState(true) }}>More Info</button>
                        <CoinModal modalState={modalState} cryptoCoin={cryptoCoin} /></div>
                })}
            </div>
        </div>
    )
}