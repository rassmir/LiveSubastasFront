import React from "react";
const Select = ({options}) => {
    return (
        <select>
            {options.map(value => (
                <option key={value.id} value={value.id}>
                    {value.name}
                </option>
            ))}
        </select>
    )
}
export default Select