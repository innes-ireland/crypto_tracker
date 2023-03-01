import { Line } from "react-chartjs-2"
import { useState, useEffect } from "react"
import axios from "axios"

export default function CoinModal({ setModalState }) {


    const [graphData, setGraphData] = useState([])

    const dailyPriceChange = () => { }

    const hideModal = () => {
        setModalState(false)
    }

    return (
        < div className="coinModal_wrapper" >
            <div className="coinModal_header">
                <h2> this is a modal </h2>
            </div>
            <div className="coinModal_content">
                <h2> </h2>
            </div>
            <div className="closeButton">
                <button className="closeButton" onClick={() => { setModalState(false) }}>
                    Close Window
                </button>
            </div>

        </div >
    )




}

