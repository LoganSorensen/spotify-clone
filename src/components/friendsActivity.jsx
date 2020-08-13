import React from "react";

import Friend from './friend';

const FriendsActivity = () => {
  return (
    <div className="friends-activity-bar">
      <h2>Friend Activity</h2>
      <Friend />
      <button className="find-friends">FIND FRIENDS</button>
    </div>
  );
};

export default FriendsActivity;
