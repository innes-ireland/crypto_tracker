import { useEffect } from "react"
import { useState } from "react"
import { Chart as ChartJS } from "chart.js/auto"
import { Line } from "react-chartjs-2"
import { Chart } from "chart.js"

export default function Graph({ lastSevenDays, coinPriceArray }) {

    const [dataSets, setDataSets] = useState(

        {
            label: "",
            backgroundColor: [],
            data: [],
        }
    )

    useEffect(() => {
        setDataSets({
            label: "coin value over last seven days",
            backgroundColor: ["#FFCE75"],
            data: coinPriceArray
        })
    }, [dataSets])

    return (
        <div className="graph_wrapper">

            <Line data={{
                labels: lastSevenDays,
                datasets: [dataSets]
            }} />


        </div>


    )

}

