import { Line } from "react-chartjs-2"
import { useState } from "react"
import axios from "axios"

export default function CoinModal(modalState, cryptoCoin) {

    const [graphData, setGraphData] = useState([])

    const dailyPriceChange = () => {

    }
    if (modalState === false) {
        return (
            <div className="coinModal_wrapper">
                <div className="coinModal_header">
                    <h2> this is a modal </h2>
                </div>
                <div className="coinModal_content">
                    <h2> {cryptoCoin.name}</h2>
                </div>

            </div>)
    }

}