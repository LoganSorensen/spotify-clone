import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setCurrentSong } from "../../actions/setCurrentSongActions";

const SearchPage = (props) => {
  const { albums, artists, episodes, playlists, shows, tracks } = props;

  const truncateStr = (str) => {
    const length = 32;
    return str.length > length ? str.substr(0, length - 1) + "..." : str;
  };

  const setSong = (track) => {
    props.setCurrentSong(track);
  };

  return (
    <div className="search-results">
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

const mapStateToProps = (state) => {
  console.log(state);
  return {
    albums: state.setSearchResults.albums,
    artists: state.setSearchResults.artists,
    episodes: state.setSearchResults.episodes,
    playlists: state.setSearchResults.playlists,
    shows: state.setSearchResults.shows,
    tracks: state.setSearchResults.tracks,
  };
};

export default connect(mapStateToProps, { setCurrentSong })(SearchPage);
