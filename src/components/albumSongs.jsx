import React from 'react';

const AlbumSongs = (props) => {
    // console.log('album songs props: ', props.tracks)
    return (
        <div className='album-songs'>
            <div className="categories">
                <p className='track-number'>#</p>
                <p className="title">TITLE</p>
                <i className="far fa-clock length"></i>
                <i className="far fa-thumbs-up rating"></i>
            </div>
            <div className="tracks">
            {props.tracks.map((track) => {
                return (
                <div key={track.track_number} className="track">
                    <p className='track-number'>{track.track_number}</p>
                    <i className="far fa-heart"></i>
                    <p className='name'>{track.name}</p>
                    <p>{track.duration_ms}</p>
                </div>
                )
            })}
            </div>
        </div>
    )
}

export default AlbumSongs;