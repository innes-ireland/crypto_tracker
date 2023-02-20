import { useEffect, useState } from "react"
import axios from "axios"

export default function DisplayData(apiUrl,) {


    const [cryptoCoins, setCryptoCoins] = useState([])


    const fetchData = async () => {
        const response = await axios.get(apiUrl)
        setCryptoCoins(response.data)

    }
    useEffect(() => { fetchData() }, [])

    return (
        <div className="coinInfo">
            {cryptoCoins.map((cryptoCoin) => {
                return <div className="coinDetails"><img source={{ uri: cryptoCoin.image }} alt={cryptoCoin.name} /> {cryptoCoin.name}</div>
            })}
        </div>
    )
}