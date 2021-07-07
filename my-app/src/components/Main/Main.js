import Table from "../Table/Table";
import LineChart from "../LineChart/LineChart";
import {useEffect, useState} from "react";

export default function Main() {

    let currency1 = {};
    let currency2 = {};
    let currency3 = {};

    const [state, setState] = useState(true);

    const [data, setData] = useState({
        labels: [],
        datasets: [
            {
                label: 'RUB',
                data: [],
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
            },
        ],
    });

    const [currency, setCurrency] = useState({
        RUB: '',
        EUR: '',
        USD: '',
    });

    const [fetchData, setFetchData] = useState({
        id: 298,
        startDate: '2021-06-23',
        endDate: '2021-07-01',
    })

    useEffect(() => {
        fetch('https://www.nbrb.by/api/exrates/rates?periodicity=0')
            .then(res => res.json())
            .then(result => {
                currency1 = result.find(obj => obj.Cur_Abbreviation === 'RUB');
                currency2 = result.find(obj => obj.Cur_Abbreviation === 'USD');
                currency3 = result.find(obj => obj.Cur_Abbreviation === 'EUR');

                setCurrency({
                    ...currency,
                    RUB: currency1,
                    USD: currency2,
                    EUR: currency3
                })

            })
    }, [])

    useEffect(() => {
        let newDate;
        let formatDate;
        let dateArray = [];
        let ratesArray = [];

        fetch(`https://www.nbrb.by/API/ExRates/Rates/Dynamics/${fetchData.id}?startDate=${fetchData.startDate}&endDate=${fetchData.endDate}`)
            .then(res => res.json())
            .then(result =>
                result.forEach(el => {
                    newDate = new Date(el.Date);
                    formatDate = `${newDate.getDate()}.${newDate.getMonth() + 1}.${newDate.getFullYear()}`;
                    dateArray.push(formatDate);
                    ratesArray.push(el.Cur_OfficialRate);
                    setData({
                        labels: dateArray,
                        datasets: [{...data.datasets[0], data: ratesArray}]
                    })
                })
            )
    }, [fetchData])

    const handleChangeView = (e) => {
        e.preventDefault();
        setState(!state)
    }

    const handleSelectChange = (ref) => {
        let newTitle = Object.values(currency).find(el => +ref === el.Cur_ID)
        setData({
            ...data,
            datasets: [ {...data.datasets[0], label: newTitle.Cur_Abbreviation}]
        })

        setFetchData({
            ...fetchData,
            id: ref,
        })
    }

    return (
        <div>
            {state ?
                <LineChart handleChange={handleSelectChange} lineChartData={data} fetchData={fetchData}
                           setFetchData={setFetchData} currencyData={currency}/> :
                <Table handleChange={handleSelectChange} lineChartData={data} currencyData={currency}/>
            }
            <button onClick={handleChangeView}>Switch</button>
        </div>
    )
}