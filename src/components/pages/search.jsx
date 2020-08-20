import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { setCurrentSong } from "../../actions/setCurrentSongActions";

import { spotifyAPI } from "../../utils/spotifyAPI";

const SearchPage = (props) => {
  const [query, setQuery] = useState("");
  const [albums, setAlbums] = useState();
  const [artists, setArtists] = useState();
  const [episodes, setEpisodes] = useState();
  const [playlists, setPlaylists] = useState();
  const [shows, setShows] = useState();
  const [tracks, setTracks] = useState();

  const spotify = () => {
    spotifyAPI()
      .get(`search?q=${query}&type=track,artist,album,playlist,show,episode`)
      .then((res) => {
        // console.log("response from test: ", res.data);
        setAlbums(res.data.albums.items.slice(0, 4));
        setArtists(res.data.artists.items.slice(0, 4));
        setEpisodes(res.data.episodes.items.slice(0, 4));
        setPlaylists(res.data.playlists.items.slice(0, 4));
        setShows(res.data.shows.items.slice(0, 4));
        setTracks(res.data.tracks.items.slice(0, 4));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    // console.log(e.target.value);
    setQuery(e.target.value);
    // console.log(query);
  };

  const truncateStr = (str) => {
    const length = 32;
    return str.length > length ? str.substr(0, length - 1) + "..." : str;
  };

  const setSong = (track) => {
    props.setCurrentSong(track);
  };

  return (
    <div className="search-results">
      <div className="test">
        <input type="text" onChange={handleChange} />
        <button onClick={spotify}>Hit API</button>
      </div>
      <div className="search-category">
        <h3>Songs</h3>
        <div className="group">
          {tracks &&
            tracks.map((song, index) => {
              return (
                <div key={index} className="song" onClick={() => setSong(song)}>
                  <div className="image-cont">
                    {song.album.images.length > 0 && (
                      <img
                        src={
                          song.album.images[song.album.images.length - 1].url
                        }
                        alt="album cover"
                      />
                    )}
                  </div>
                  <div className="song-search-info">
                    <p>{truncateStr(song.name)}</p>
                    <p className="light">{truncateStr(song.artists[0].name)}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="search-category">
        <h3>Artists</h3>
        <div className="group">
          {artists &&
            artists.map((artist, index) => {
              return (
                <div key={index} className="artist">
                  <div className="image-cont">
                    {artist.images.length > 0 && (
                      <img
                        src={artist.images[artist.images.length - 1].url}
                        alt="artist"
                      />
                    )}
                  </div>
                  <p>{truncateStr(artist.name)}</p>
                </div>
              );
            })}
        </div>
      </div>
      <div className="search-category">
        <h3>Albums</h3>
        <div className="group">
          {albums &&
            albums.map((album, index) => {
              return (
                <Link key={index} to={`/album/${album.id}`} className="album">
                  <div className="image-cont">
                    {album.images.length > 0 && (
                      <img
                        src={album.images[album.images.length - 1].url}
                        alt="album cover"
                      />
                    )}
                  </div>
                  <div className="album-search-info">
                    <p>{truncateStr(album.name)}</p>
                    <p className="light">
                      {truncateStr(album.artists[0].name)}
                    </p>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
      <div className="search-category">
        <h3>Playlists</h3>
        <div className="group">
          {playlists &&
            playlists.map((playlist, index) => {
              return (
                <Link
                  key={index}
                  to={`/playlist/${playlist.id}`}
                  className="playlist"
                >
                  <div className="image-cont">
                    {playlist.images.length > 0 && (
                      <img
                        src={playlist.images[playlist.images.length - 1].url}
                        alt="playlist cover"
                      />
                    )}
                  </div>
                  <p>{playlist.name}</p>
                </Link>
              );
            })}
        </div>
      </div>
      <div className="search-category">
        <h3>Podcasts &amp; Videos</h3>
        <div className="group">
          {shows &&
            shows.map((show, index) => {
              return (
                <div key={index} className="show">
                  <div className="image-cont">
                    {show.images.length > 0 && (
                      <img
                        src={show.images[show.images.length - 1].url}
                        alt="show cover"
                      />
                    )}
                  </div>
                  <p>{show.name}</p>
                </div>
              );
            })}
        </div>
      </div>
      <div className="search-category">
        <h3>Podcast Episodes</h3>
        <div className="group">
          {episodes &&
            episodes.map((episode, index) => {
              return (
                <div key={index} className="episode">
                  <div className="image-cont">
                    {episode.images.length > 0 && (
                      <img
                        src={episode.images[episode.images.length - 1].url}
                        alt="episode cover"
                      />
                    )}
                  </div>
                  <p>{truncateStr(episode.name)}</p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default connect(null, { setCurrentSong })(SearchPage);
