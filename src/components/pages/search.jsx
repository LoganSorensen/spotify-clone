import React from "react";
import { connect } from "react-redux";

import SearchResults from "../searchResults";

const SearchPage = (props) => {
  const { albums, artists, episodes, playlists, shows, tracks } = props;

  return (
    <div className="search-results">
      {albums.length !== 0 &&
      artists.length !== 0 &&
      episodes.length !== 0 &&
      playlists.length !== 0 &&
      shows.length !== 0 &&
      tracks.length !== 0 ? (
        <SearchResults
          albums={albums}
          artists={artists}
          episodes={episodes}
          playlists={playlists}
          shows={shows}
          tracks={tracks}
        />
      ) : props.query !== "" ? (
        <div className="no-results">
          <i className="far fa-flag"></i>
          <p>No results found for "{props.query}"</p>
          <p className='small-text'>
            Please make sure your words are spelled correctly or use less or
            different keywords.
          </p>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    albums: state.setSearchResults.albums,
    artists: state.setSearchResults.artists,
    episodes: state.setSearchResults.episodes,
    playlists: state.setSearchResults.playlists,
    shows: state.setSearchResults.shows,
    tracks: state.setSearchResults.tracks,
    query: state.setSearchResults.query,
  };
};

export default connect(mapStateToProps, {})(SearchPage);
