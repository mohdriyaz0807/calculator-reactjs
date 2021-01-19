import React from 'react'
import './button.css'

const Button = (props) => {
    const bgcolor=((props.label)==='=') ? "green" : "gold"
    const out = ()=>{
        props.show(props.label)
    }
    return (
        <div>
            <button 
            style={{backgroundColor:bgcolor,color:'black'}}
            className='item'
            onClick={out}
            >{props.label}</button>
        </div>
    )
}

export default Button