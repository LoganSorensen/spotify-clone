import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { spotifyAPI } from "../../utils/spotifyAPI";

const Home = (props) => {
  const [tracks, setTracks] = useState();
  const [artists, setArtists] = useState();
  const [playlists, setPlaylists] = useState();

  // get token from url
  useEffect(() => {
    let access_token = window.location.hash.substring(1);

    access_token = access_token.split("&");
    let token = access_token[0];
    token = token.split("=");

    if (token[1] !== undefined) {
      localStorage.setItem("spotifyToken", token[1]);
    }

    // reloads page after token is set in order to properly render components
    if (window.location.hash.includes('3600')){
      window.location.hash = '';
      window.location.reload();
    }
  }, []);

  useEffect(() => {
    spotifyAPI()
      .get("/me/top/tracks")
      .then((res) => {
        setTracks(res.data.items.slice(0, 6));
      })
      .catch((err) => {
        console.log(err);
      });
    spotifyAPI()
      .get("/me/top/artists")
      .then((res) => {
        setArtists(res.data.items.slice(0, 6));
      })
      .catch((err) => {
        console.log(err);
      });
    spotifyAPI()
      .get(`users/${props.id}/playlists`)
      .then((res) => {
        setPlaylists(res.data.items.slice(0, 6));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.id]);

  const truncateStr = (str) => {
    const length = 29;
    return str.length > length ? str.substr(0, length - 1) + "..." : str;
  };

  return (
    <div className="home">
      <h3>Your Top Albums</h3>
      <div className="top-tracks">
        {tracks &&
          tracks.map((track, index) => {
            return (
              <div key={index} className="track">
                <Link to={`/album/${track.album.id}`} className="image-cont">
                  <img src={track.album.images[1].url} alt="album cover" />
                </Link>
                <Link to={`/album/${track.album.id}`}>
                  <p className="album-name">{truncateStr(track.album.name)}</p>
                </Link>
                <p className="artist-name">{track.artists[0].name}</p>
              </div>
            );
          })}
      </div>
      <h3>Your Top Artists</h3>
      <div className="top-artists">
        {artists &&
          artists.map((artist, index) => {
            return (
              <div key={index} className="artist">
                <div className="image-cont">
                  <img src={artist.images[1].url} alt="artist" />
                </div>
                <p className="artist-name">{artist.name}</p>
              </div>
            );
          })}
      </div>
      <h3>Your Public Playlists</h3>
      <div className="playlists">
        {playlists &&
          playlists.map((playlist, index) => {
            return (
              <div key={index} className="playlist">
                <Link to={`/playlist/${playlist.id}`} className="image-cont">
                  {playlist.images.length > 0 && (
                    <img src={playlist.images[1].url} alt="playlist cover" />
                  )}
                </Link>
                <Link to={`/playlist/${playlist.id}`}>
                  <p className="playlist-name">{truncateStr(playlist.name)}</p>
                </Link>
                <p className="playlist-desc">{playlist.description}</p>
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
