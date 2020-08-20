import React from "react";

const GetAuth = () => {
  return (
    <div className="get-auth">
      <div className="cta">
        <p>
          This application requires access to your Spotify account in order to
          continue.
        </p>
        <a
          className="green-btn"
          // href="https://accounts.spotify.com/en/authorize/?client_id=943586369faa422b8a79545a5ecdc6da&redirect_uri=http:%2F%2Flocalhost:3000/home&scope=playlist-modify-public%20user-follow-read%20user-top-read&response_type=token"
          href="https://accounts.spotify.com/en/authorize/?client_id=943586369faa422b8a79545a5ecdc6da&redirect_uri=https://sad-nightingale-7edb43.netlify.app/home&scope=playlist-modify-public%20user-follow-read%20user-top-read&response_type=token"
        >
          Allow
        </a>
      </div>
    </div>
  );
};

export default GetAuth;
