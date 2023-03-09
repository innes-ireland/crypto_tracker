import axios from "axios";
import { useState, useEffect } from "react";
import Graph from "./Graph";

export default function ModalWindow({ setModalState, setModalData, modalData }) {


    const [graphData, setGraphData] = useState([])




    const [graphApi, setGraphApi] = useState(`https://api.coingecko.com/api/v3/coins/${modalData.id}/market_chart?vs_currency=usd&days=6&interval=daily`)

    // fetch request for historic data to enable making line graph 

    const fetchGraphData = async () => {
        const response = await axios.get(graphApi)
        setGraphData(response.data.prices)

    }
    console.log(graphData)


    // function to retrieve last seven days in date format for x axis points

    const getLastSevenDays = () => {
        const days = []
        const milliSecondsPerDay = 86400000; // 864000 = 24 * 3600 * 1000

        for (let i = 6; i >= 0; i--) {
            const day = new Date(Date.now() - i * milliSecondsPerDay);
            days.push(day.toDateString());
        }
        return days
    }

    const lastSevenDays = getLastSevenDays()

    // retrieve coin prices from nested array that is graphData // 

    const coinPriceArray = graphData.map((innerArray) => {
        return (
            innerArray[1]
        )
    })
    console.log(coinPriceArray)


    useEffect(() => { fetchGraphData() }, [graphApi])
    useEffect(() => { getLastSevenDays() }, [graphApi])




    return (
        < div className="coinModal_wrapper" >
            <div className="coinModal_container">
                <div className="coinModal_header">
                    <h2> {modalData.name} </h2>
                </div>
                <div className="coinModal_content">
                    <div className="coinModal_text">
                        <p> Current Price:{modalData.current_price}<br></br>
                            Number in Circulation: {modalData.circulating_supply}<br></br>
                            24hr high: {modalData.high_24h}<br></br>
                            24hr low: {modalData.low_24h}<br></br>
                        </p>
                    </div>
                    <div className="coinModal_graph"></div>
                    <Graph lastSevenDays={lastSevenDays} coinPriceArray={coinPriceArray} />
                </div>
                <div className="closeButton">
                    <button className="closeButton" onClick={() => { { setModalData(null); setModalState(false) } }}>
                        Close Window
                    </button>
                </div>
            </div>

        </div >
    )
}