import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { spotifyAPI } from "../../utils/spotifyAPI";

const Home = (props) => {
  const [tracks, setTracks] = useState();
  const [artists, setArtists] = useState();
  const [playlists, setPlaylists] = useState();

  useEffect(() => {
    spotifyAPI()
      .get("/me/top/tracks")
      .then((res) => {
        console.log(res.data.items);
        setTracks(res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
    // spotifyAPI()
    //   .get("/me/top/artists")
    //   .then((res) => {
    //     console.log(res.data.items);
    //     setArtists(res.data.items);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // spotifyAPI()
    //   .get(`users/${props.id}/playlists`)
    //   .then((res) => {
    //     console.log(res.data.items);
    //     setPlaylists(res.data.items)
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, [props.id]);

  console.log(props);

  return (
    <div className="home">
      <div className="top-tracks">
        {tracks &&
          tracks.map((track, index) => {
            return (
              <div key={index} className="track">
                <div className="image-cont">
                  <img src={track.album.images[1].url} alt="album cover" />
                </div>
                <p>{track.album.name}</p>
                <p>{track.artists[0].name}</p>
              </div>
            );
          })}
      </div>
      <div className="top-artists">
        {artists &&
          artists.map((artist, index) => {
            return (
              <div key={index} className="artist">
                <div className="image-cont">
                  <img src={artist.images[1].url} alt="artist" />
                </div>
                <p>{artist.name}</p>
              </div>
            );
          })}
      </div>
      <div className="playlists">
        {playlists &&
          playlists.map((playlist, index) => {
            return (
              <div key={index} className="playlist">
                <div className="image-cont">
                  {playlist.images.length > 0 && (
                    <img src={playlist.images[1].url} alt="playlist cover" />
                  )}
                  <p>{playlist.name}</p>
                  <p>{playlist.description}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    id: state.setUser.id,
  };
};

export default connect(mapStateToProps, {})(Home);
