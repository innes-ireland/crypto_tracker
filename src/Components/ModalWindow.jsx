import axios from "axios";
import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

export default function ModalWindow({ setModalState, setModalData, modalData }) {
    console.log(modalData)

    const [graphData, setGraphData] = useState([])
    const [graphPoints, setGraphPoints] = useState([])
    const [graphApi, setGraphApi] = useState(`https://api.coingecko.com/api/v3/coins/${modalData.id}/market_chart?vs_currency=usd&days=7&interval=daily`)

    const fetchGraphData = async () => {
        const response = await axios.get(graphApi)
        setGraphData(response.data)

    }

    const populateGraph = () => {
        graphData.map((dataPoint) => { })


    }
    useEffect(() => { fetchGraphData() }, [graphApi])
    console.log(graphData.prices)


    return (
        < div className="coinModal_wrapper" >
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

        </div >
    )
}