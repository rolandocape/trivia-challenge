import React from 'react';
import PropTypes from 'prop-types';

import './Selector.css';

const Selector = ({ id, value, options, changed }) => {
    return (
        <div style={{ marginBottom: '30px' }}>
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

Selector.propTypes = {
    id: PropTypes.string,
    value: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object),
    changed: PropTypes.func
}

export default Selector;