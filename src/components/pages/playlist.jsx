import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import SongList from "../songList";
import EditPlaylistModal from "../editPlaylistModal";

import { spotifyAPI } from "../../utils/spotifyAPI";

const Playlist = () => {
  const params = useParams();

  const [playlist, setPlaylist] = useState();
  const [tracks, setTracks] = useState();

  useEffect(() => {
    spotifyAPI()
      .get(`playlists/${params.id}`)
      .then((res) => {
        setPlaylist(res.data);
        setTracks(res.data.tracks);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.id]);

  return (
    <div className="playlist">
      <div className="playlist-page-header header">
        <div className="playlist-img">
          {playlist && playlist.images.length !== 0 && (
            <img src={playlist.images[0].url} alt="playlist cover" />
          )}
        </div>
        <div className="playlist-info">
          <p className="playlist-tag">PLAYLIST</p>
          {playlist && (
            <h2>
              <EditPlaylistModal
                name={playlist.name}
                description={playlist.description}
                playlist_id={playlist.id}
              />
              {playlist.name}
            </h2>
          )}
          {playlist && playlist.description !== "" && (
            <p className="description">{playlist.description}</p>
          )}
          <div className="creator-and-length">
            {playlist && (
              <p>
                Created by <span>{playlist.owner.display_name}</span>
              </p>
            )}
            <p className="spacer">•</p>
            {tracks && <p>{tracks.total} songs, 30 min</p>}
          </div>
          <div className="playlist-btns">
            <button className="play-btn">PLAY</button>
            <button className="more-btn">
              <i className="fas fa-ellipsis-h"></i>
            </button>
          </div>
        </div>
      </div>
      {tracks !== undefined && <SongList tracks={tracks} />}
    </div>
  );
};

export default Playlist;
