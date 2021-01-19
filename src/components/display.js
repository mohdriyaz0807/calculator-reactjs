import React from 'react'
import './button.css'

const Display = (props) => {

    return (
        <div >
            <input className='textfield' type="text" value={props.value} readOnly/>
        </div>
    )
}

export default Display