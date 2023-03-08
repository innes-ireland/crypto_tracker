import axios from "axios";
import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

export default function ModalWindow({ setModalState, setModalData, modalData }) {


    const [graphData, setGraphData] = useState([])
    const [dataSets, setDataSets] = useState({
        data: []
    })
    const [labels, setLabels] = useState([])


    const [graphApi, setGraphApi] = useState(`https://api.coingecko.com/api/v3/coins/${modalData.id}/market_chart?vs_currency=usd&days=7&interval=daily`)

    // fetch request for historic data to enable making line graph 

    const fetchGraphData = async () => {
        const response = await axios.get(graphApi)
        setGraphData(response.data.prices)

    }


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

    // function to retrieve coin prices from nested array that is graphData // 
    console.log(graphData)
    console.log(graphData.length)
    function getCoinPrices(graphData) {
        const coinPrices = []
        for (var i = 0; i < graphData.length; i++) {
            console.log(graphData[i])
            const innerArray = graphData[i];
            {
                const price = innerArray[1];
                coinPrices.push(price)

            }
            return coinPrices

        }


    }
    console.log(getCoinPrices(graphData))



    // object used to feed data to reactChartJS component
    const data = {
        labels: lastSevenDays,
        dataSets: {
            labels: "price tracking",
            data: [1, 2, 3, 4, 5, 6, 7],
            backgroundColor: "#0080F6",
        }
    }







    useEffect(() => { fetchGraphData() }, [graphApi])




    return (
        < div className="coinModal_wrapper" >
            <div className="coinModal_container">
                <div className="coinModal_header">
                    <h2> {modalData.name} </h2>
                </div>
                <div className="coinModal_content">
                    <p> Current Price:{modalData.current_price}<br></br>
                        Number in Circulation: {modalData.circulating_supply}<br></br>
                        24hr high: {modalData.high_24h}<br></br>
                        24hr low: {modalData.low_24h}<br></br>



                    </p>


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