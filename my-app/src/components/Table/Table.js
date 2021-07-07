import Select from "../Select/Select";
import {useState} from "react";

export default function Table({currencyData, lineChartData, handleChange}) {
    const [state, setState] = useState(false);
    let newLabel = lineChartData.datasets[0].label;
    let newCurrencies = lineChartData.datasets[0].data;
    console.log('newLabel', newLabel);
    console.log('newCurrencies', newCurrencies);
    const [arr, setArr] = useState({
        currencyLabels: [],
        currencyArr: []
    })

    console.log('arrPrev', arr);

    const handleAddButton = () => {
        setState(true);
    }

    const handleAddNewCurrency = () => {
        setArr({
            currencyLabels: [...arr.currencyLabels, newLabel],
            currencyArr: [...arr.currencyArr, newCurrencies]
        })
    }
    console.log('arrNew', arr);
    //setState(false);

    return (
        <>
            <table border='1'>
                <thead>
                <tr>
                    <td>Date\Currency</td>
                    <td>{lineChartData.datasets[0].label}</td>
                </tr>
                </thead>
                <tbody>
                {Object.entries(lineChartData.labels).map((dateCell, index) => {
                    return <tr>
                        <td>{dateCell[1]}</td>
                        <td>{lineChartData.datasets[0].data[index]}</td>
                    </tr>
                })}
                </tbody>
            </table>
            <button onClick={handleAddButton}>Add</button>

            {state &&
            <Select data={currencyData} handleAddNewCurrency={handleAddNewCurrency} handleChange={handleChange}
                    setStateTable={setState}/>}
        </>
    )
}