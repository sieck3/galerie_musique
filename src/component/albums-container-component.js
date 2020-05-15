import React from 'react'

const AlbumsContainerComponent = ({ album, handleClick }) => (
    <div className='row border border-dark rounded'>

        <section className='day-forecast'>
            <div className='col-sm-4'><img src={album.thumb} alt={album.cover_image} /></div>

            <div className='container'>  <h2> {album.title}</h2>
                <p> Style : {album.style}</p>
                <p> Year : {album.year}</p>
                <p> <a className='text-danger' href='#' onClick={handleClick} id={album.master_id}> Details</a></p>
            </div>

        </section>
    </div>

)

export default AlbumsContainerComponent
