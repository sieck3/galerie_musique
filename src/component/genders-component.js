import React from 'react'

const GendersComponent = ({ text, options, id, handleChange, handleClick }) => (
    <div className='text-white  justify-content-center'>
        <span onClick={handleClick} className='col-4'>{text}</span>
        <select onChange={handleChange} id={id}>
            {Object.values(options).map((gender, index) => <option key={index} id={index} value={gender.title}> {gender.title}</option>)}
        </select>
    </div>
)

export default GendersComponent
