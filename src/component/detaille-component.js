import React from 'react'
//test

// {albums.results.map((album, index) => <p key={index}>{album.title}</p>)}
const DetailleCoponent = ({ albumDetaille, returneVideo, changeVideo }) => (

    <div className='row align-items-end'>

        <ul className='list-group'>
            {albumDetaille.videos.map((video, index) => <div key={index} className=''> <li id={index} onClick={changeVideo} className='list-group-item list-group-item-dark'>{video.title}</li><button onClick={returneVideo} id={'uri=' + video.uri + '&' + 'title=' + video.title + '&' + 'gender=1' + '&' + 'masterCode=' + albumDetaille.id}>ajouter</button> </div>)}
        </ul>

    </div>

)

export default DetailleCoponent
