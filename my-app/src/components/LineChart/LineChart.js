import React, {useEffect, useRef, useState} from 'react';
import {Line} from 'react-chartjs-2';
import styles from './LineChart.module.scss';
import Select from "../Select/Select";
import {log10} from "chart.js/helpers";

export default function LineChart({fetchData,setFetchData, lineChartData, currencyData, handleChange}) {

    const startDateRef = useRef(null);
    const endDateRef = useRef(null);

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    };

    const handleDateChange = () => {
        setFetchData({
            ...fetchData,
            startDate: startDateRef.current.value,
            endDate: endDateRef.current.value
        })

    }

    return (
        <div className={styles.lineChart}>
            <Line data={lineChartData} options={options}/>
            <Select data={currencyData} handleChange={handleChange} />
            <label htmlFor="startDate">Start date:</label>
            <input id="startDate" defaultValue="2021-06-23" ref={startDateRef} type="date" onChange={handleDateChange}/>
            <label htmlFor="endDate">End date:</label>
            <input id="endDate" defaultValue="2021-07-01" ref={endDateRef} type="date" onChange={handleDateChange}/>
        </div>
    )
}