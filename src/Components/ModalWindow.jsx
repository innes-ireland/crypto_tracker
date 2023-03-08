import axios from "axios";
import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

export default function ModalWindow({ setModalState, setModalData, modalData }) {
    console.log(modalData)

    const [graphData, setGraphData] = useState([])
    const [dataSets, setDataSets] = useState({
        data: []
    })
    const [labels, setLabels] = useState([])


    const [graphApi, setGraphApi] = useState(`https://api.coingecko.com/api/v3/coins/${modalData.id}/market_chart?vs_currency=usd&days=7&interval=daily`)

    const getLastSevenDays = () => {
        const days = []
        const milliSecondsPerDay = 86400000;

        for (let i = 6; i >= 0; i--) {
            const day = new Date(Date.now() - i * milliSecondsPerDay);
            days.push(day.toDateString());
        }
        return days
    }

    const lastSevenDays = getLastSevenDays()



    const fetchGraphData = async () => {
        const response = await axios.get(graphApi)
        setGraphData(response.data)

    }


    useEffect(() => { fetchGraphData() }, [graphApi])
    console.log(graphData.prices)



    useEffect(() => {



        let temp_arr = [] // temp_arr allows for continual updating of list as opposed to reseting with each new label added to chart
        let label_arr = lastSevenDays
        let colors_arr = []
        graphData.forEach((priceArray) => {
            console.log(priceArray[1])









        },)


        setDataSets(dataSetsprev => {

            return ({
                ...dataSetsprev,
                data: temp_arr,
                backgroundColor: colors_arr,
                borderColor: colors_arr,
            });

        })

        console.log(dataSets)
        setLabels(label_arr)

        setGraphData({
            labels: label_arr,
            datasets: [dataSets]
        })





    }, [])


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