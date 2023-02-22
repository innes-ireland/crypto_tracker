import { useEffect, useState } from "react"
import axios from "axios"
import React from "react"

export default function DisplayData({ apiUrl, }) {


    const [cryptoCoins, setCryptoCoins] = useState([])


    const fetchData = async () => {
        const response = await axios.get(apiUrl)
        setCryptoCoins(response.data)

    }
    useEffect(() => { fetchData() }, [apiUrl])

    return (
        <div className="coinInfo">
            {cryptoCoins.map((cryptoCoin) => {
                console.log(cryptoCoin)
                return <div className="coinDetails"><img className="coin_image" src={cryptoCoin.image} alt="the cryptocoins logo" /> {cryptoCoin.name} {cryptoCoin.current_price}</div>
            })}
        </div>
    )
}