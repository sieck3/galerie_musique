import React from 'react'

const SearchComponent = ({ handleClick, handleChange }) => (
    <div className='form-inline'>
        <button type='button' className='btn btn-outline-success my-2 my-sm-0' onClick={handleClick}>search</button>
        <input className='form-control mr-sm-2' type='text' name='search' onChange={handleChange} />
    </div>
)

export default SearchComponent
