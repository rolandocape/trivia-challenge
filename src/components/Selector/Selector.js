import React from 'react';

const Selector = ({ id, value, options, changed }) => {
    return (
        <div>
            <label htmlFor={id}>Select {id}: </label>
            <select
                name={id}
                id={id}
                value={value}
                onChange={e => changed(e.currentTarget.value)}
            >
                {options.map(o =>
                    <option key={o.value} value={o.value}>{o.label}</option>
                )}
            </select>
        </div>
    )
}

export default Selector;