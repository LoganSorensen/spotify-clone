import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { connect } from "react-redux";

import { spotifyAPI } from "../utils/spotifyAPI";

const EditPlaylistModal = (props) => {
  const [formData, setFormData] = useState({
    name: `${props.name}`,
    description: `${props.description}`,
  });

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const editPlaylist = (e) => {
    e.preventDefault();

    spotifyAPI()
      .put(`playlists/${props.playlist_id}`, formData)
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });

    toggle();
    setFormData({ name: `${props.name}`, description: `${props.description}` });
    window.location.reload();
  };

  return (
    <div>
      <button className="edit-playlist-btn" onClick={toggle}></button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Edit Playlist Details</ModalHeader>
        <ModalBody>
          <form onSubmit={editPlaylist}>
            <div className="playlist-form">
              <div className="choose-img">
                <i className="fas fa-music"></i>Choose image
              </div>
              <div className="playlist-inputs">
                <label htmlFor="playlist-name">Name</label>
                <input
                  type="text"
                  id="playlist-name"
                  name="name"
                  placeholder="Playlist name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <label htmlFor="playlist-desc">Description</label>
                <textarea
                  type="text"
                  id="playlist-desc"
                  name="description"
                  placeholder="Give your playlist a catchy description."
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>
            </div>
            <Button type="submit">SAVE</Button>
          </form>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    id: state.setUser.id,
  };
};

export default connect(mapStateToProps, {})(EditPlaylistModal);
