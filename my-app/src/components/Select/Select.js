import {useRef} from "react";

export default function Select({data, handleChange, setStateTable, handleAddNewCurrency}) {
    const idRef = useRef(null);

    return (
        <select ref={idRef} onChange={(e) => {
            e.preventDefault();
            handleChange(idRef.current.value)
            setStateTable(false)
            handleAddNewCurrency();
        }}>
            {Object.values(data).map(val =>
                <option
                    key={val.Cur_ID}
                    title={val.Cur_Name}
                    value={val.Cur_ID}
                >
                    {val.Cur_Abbreviation}
                </option>
            )}
        </select>
    )
}